import { Web3Provider } from "@ethersproject/providers";
import ethr from "ethr-did-resolver";
import { Resolver } from "did-resolver";
import { EthrDID } from "ethr-did";

// registry コントラクトのアドレス
const REGISTRY_CONTRACT_ADDRESS = "0x03d5003bf0e79C5F5223588F347ebA39AfbC3818"; // sepolia
// const REGISTRY_CONTRACT_ADDRESS = "0xdca7ef03e98e0dc2b855be647c39abe984fcf21b";  // goerli

/**
 * getDidResolver method 
 */
export async function getDidResolver(provider: Web3Provider) {
  // チェーンIDを取得する。
  const chainNameOrId = (await provider.getNetwork()).chainId;
  
  const providerConfig = {
    rpcUrl: provider.connection.url,
    registry: REGISTRY_CONTRACT_ADDRESS, // ERC1056のRegistry Contract Address
    chainId: chainNameOrId,
    provider,
  };
  // DID resovlerインスタンスを生成する。
  const ethrResolver = ethr.getResolver(providerConfig);
  const didResolver = new Resolver(ethrResolver);

  return didResolver;
}

/**
 * getEthrDidWithKeypair method
 */
export async function getEthrDidWithKeypair(
  provider: Web3Provider,
  keypair: any,
  identifier: any = null
) {
  // アカウント一覧を取得する。
  const chainNameOrId = (await provider.getNetwork()).chainId;
  const accounts = await provider.listAccounts();

  if (identifier == null) {
    identifier = accounts[0];
  }
 
  
  // ウォレットアドレスと紐づくDIDを取得する。
  const ethrDid = new EthrDID({
    ...keypair,
    identifier: identifier,
    provider,
    chainNameOrId,
    txSigner: provider.getSigner(accounts[0]),
    registry: REGISTRY_CONTRACT_ADDRESS,
  });
  return ethrDid;
}

/**
 * getEthrDidWithoutKeypair method
 */
export async function getEthrDidWithoutKeypair(
  provider: Web3Provider,
  identifier: any = null
) {
  const chainNameOrId = (await provider.getNetwork()).chainId;
  const accounts = await provider.listAccounts();

  if (identifier == null) {
    identifier = accounts[0];
  }
  console.log("identifier: ", identifier);
  
  // ウォレットアドレスと紐づくDIDを取得する。
  const ethrDid = new EthrDID({
    identifier: identifier,
    provider,
    chainNameOrId,
    txSigner: provider.getSigner(accounts[0]),
    registry: REGISTRY_CONTRACT_ADDRESS,
  });
  return ethrDid;
}
