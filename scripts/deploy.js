const { ethers, upgrades } = require("hardhat");

async function main() {
  const CryptoBabyNFT = await ethers.getContractFactory("CryptoBabyNFT");
  console.log("deploying Cryptobaby NFT Contract......");
  const cryptoBaby = await upgrades.deployProxy(
    CryptoBabyNFT,
    [
      "https://bronze-major-cow-418.mypinata.cloud/ipfs/QmZYFDPNidULJGUqCaJ19R8WJz9S7YH6Jhbh4fdSkbLvyf/",
      500,
      "https://bronze-major-cow-418.mypinata.cloud/ipfs/QmVdpFBeXCmTT5VGyKbxU1cWetVV3QAJfbG8snP6B4qAxy",
    ],
    { initializer: "init" }
  );
  await cryptoBaby.deployed();

  console.log("Crypto Baby Nft contract deployed to: ", cryptoBaby.address);
}

main();
