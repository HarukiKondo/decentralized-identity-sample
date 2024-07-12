# 動かした記録

## 環境情報

```bash
node --version v20.11.0
npm --version 10.2.4
yarn --version 1.22.4
aws --version aws-cli/2.13.8 Python/3.11.4 Windows/10 exe/AMD64 prompt/off
cdk --version 2.148.1
docker --version Docker version 25.0.3, build 4debf41
```

docker も使える環境である必要あり。

## 準備したこと

- Alchemy で Sepolia の API エンドポイントを用意しました。
- faucet を取得しました。

## 動かした記録

- issuer の鍵ペアを生成

  ```bash
  yarn utils createWallet
  ```

  実行結果として`pkgs/utils/issuer.json`に鍵ペア情報が出力される。
  
  [作成したウォレットアドレス - 0x6E9efA2Ff9bFa1E07a173020721Ad214AA0e1F28](https://sepolia.etherscan.io/address/0x6E9efA2Ff9bFa1E07a173020721Ad214AA0e1F28)

- フロントエンドをビルドする。

  issuer 用、holder 用、verifier 用のフロントエンドをそれぞれビルドする。

  ```bash
  yarn holderwebapp build
  ```

  ```bash
  yarn issuerwebapp build
  ```

  ```bash
  yarn verifierwebapp build
  ```

- CDK diff コマンドを実行する。

  展開されるリソースを確認する。

  ```bash
  yarn cdk diff
  ```
