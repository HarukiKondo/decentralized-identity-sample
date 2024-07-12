const ethers = require("ethers");
const fs = require("fs");

/**
 * issuer用の鍵ペアを作成するメソッド
 */
async function main() {
  let randomWallet = ethers.Wallet.createRandom();

  let returnParam = {
    address: randomWallet.address,
    privateKey: randomWallet.privateKey,
    publicKey: randomWallet.publicKey,
  };

  console.log({ returnParam });

  // ファイルにデータを書き出す
  fs.writeFileSync(
    "./issuer.json",
    JSON.stringify(returnParam, null, 2),
    (err) => {
      if (err) {
        console.error("データの書き込み中にエラーが発生しました:", err);
        return;
      }
      console.log("データが正常に書き出されました");
    }
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
