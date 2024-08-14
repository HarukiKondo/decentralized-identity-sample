from __future__ import print_function
from jinja2 import Template, Environment, FileSystemLoader, select_autoescape
from botocore.exceptions import ClientError

import sys
import os

import subprocess
import os
import boto3
import json
import requests

def list_files_in_path(path):
  for root, dirs, files in os.walk(path):
    for file in files:
      print(os.path.join(root, file))

def check_package_in_path(package_name):
  path = '/opt/python/lib/python3.9/site-packages'
  print(f'Checking for {package_name} in {path}')
  list_files_in_path(path)


# ディレクトリを作成するメソッド
def createDirectory(path):
  if not os.path.exists(path):
    os.makedirs(path)

# シークレットマネージャーからシークレット値を取得するメソッド
def get_secretmanager(secret_name):
  parameter_encode = requests.utils.quote(secret_name)
  
  secret_name = parameter_encode
  region_name = "us-east-1"

  # Create a Secrets Manager client
  session = boto3.session.Session()
  client = session.client(
    service_name='secretsmanager',
    region_name=region_name
  )
  
  try:
    get_secret_value_response = client.get_secret_value(
        SecretId=secret_name
    )
  except ClientError as e:
    print(f'error: {e}')
    print(f'Failed to get SSM parameter store {secret_name}')
    raise e

  secret = get_secret_value_response['SecretString']
  privateKey = json.loads(secret)['issuer_privatekey']

  # 秘密鍵をファイルに保存
  with open("/tmp/issuer.pk", mode="w") as f:
    f.write(privateKey)
        
  return None
  
  

# 署名前の証明書を作成.ファイルに保存するメソッド
def readVerifiableCredentialTemplate(param=None):
  #テンプレート読み込み
  env = Environment(
    autoescape=select_autoescape(['html', 'xml']),
    loader=FileSystemLoader('./template', encoding='utf8')
    )
  tmpl = env.get_template('verifiable-credential.json.j2')

  if not param:
    param = {
      'id': 'xxxx',
      'issuer_profile_url': os.getenv('ISSUER_PROFILE_URL'),
      'name': "yamada",
      'address': 'yamagata',
      'phoneNumber': '111-1111-1111'
    }
  # テンプレートにVCに登録する値を設定
  rendered = tmpl.render(param)

  # json化
  rendered_json = json.loads(rendered)

  # ファイルに出力
  with open('/tmp/unsigned_certificates/{}.json'.format(param['id']), 'w') as f:
    json.dump(rendered_json, f, indent=2)

  return rendered_json

# 生成されたVerifiableCredentialを取得するメソッド
def getSignedVerifiableCredential(param=None):
  with open('/tmp/blockchain_certificates/{}.json'.format(param['id'])) as f:
    vc = json.load(f)
    print(vc)
    return vc


# cert_issuerを実行して証明書を払い出すメソッド
def subprocess_cert_issuer():
  
  # cert_issuerまでのフルパス
  cert_issuer_path = '/opt/python/lib/python3.9/site-packages/cert_issuer/__main__.py'
    
  # 実行するコマンドの設定
  args = [
    'python3',
    cert_issuer_path,
    #'-m',
    #'cert-issuer',
    '-c',
    'conf.ini'
  ]
  
  print(f'command args: {args}')
    
  try:
    print('=========================== [issue VC Start] ===========================')
    # コマンド実行
    output = subprocess.run(args, capture_output=True, text=True)
    print(f'result: subprocess_cert_issuer: {output}')
    
    # エラーログをチェック
    if output.returncode != 0:
      print(f'Error: cert_issuer command failed with return code {output.returncode}')
      print(f'stderr: {output.stderr}')
  except subprocess.CalledProcessError as e:
    print(f'An error occurred while running cert_issuer: {e}')
  except Exception as e:
    print(f'An unexpected error occurred: {e}')

# Lambda handler 設定
def lambda_handler(event, context):
  try:
    #print("Received event: " + json.dumps(event, indent=2))

    #print(event['body'])
    payload = json.loads(event['body'])
    print(payload)

    # 保存先ディレクトリの作成
    createDirectory('/tmp/unsigned_certificates')
    createDirectory('/tmp/blockchain_certificates')
    createDirectory('/tmp/work')
    createDirectory('/tmp/signed_certificates')

    # 秘密鍵の取得
    SSM_ISSUER_PRIVATEKEY_NAME = os.getenv('SSM_ISSUER_PRIVATEKEY_NAME')
    # get_secretmanagerメソッドの呼び出し
    get_secretmanager(secret_name=SSM_ISSUER_PRIVATEKEY_NAME)

    ## templateからVCの署名前ファイルを生成
    param = {
        'id': payload['id'],
        'issuer_profile_url': os.environ['ISSUER_PROFILE_URL'],
        'name': payload['name'],
        'address': payload['address'],
        'phoneNumber': payload['phoneNumber']
      }
    # readVerifiableCredentialTemplate メソッド呼び出し
    readVerifiableCredentialTemplate(param)

    # Issuerの秘密鍵で電子署名を実行し、Verifiable Credentialを発行する。
    # subprocess_cert_issuerメソッドの呼び出し
    subprocess_cert_issuer()

    # 生成されたVerifiable Credentialを取得
    vc = getSignedVerifiableCredential(param)


    response = {
      'statusCode': 200,
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      'body': json.dumps(vc)
    }

    print(response)
    return response

  except:
    import traceback
    traceback.print_exc()

    response = {
      'statusCode': 502,
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      'error': traceback.print_exc()
    }
    return response