const { ethers, upgrades } = require("hardhat");

async function main() {
  const CryptoBabyNFT = await ethers.getContractFactory("CryptoBabyNFT");
  console.log("deploying Cryptobaby NFT Contract......");
  const cryptoBaby = await upgrades.deployProxy(
    CryptoBabyNFT,
    [
      "https://bronze-major-cow-418.mypinata.cloud/ipfs/QmUmDDZhno9bNVe9oxAESu8nEYKwPCC8nA9u3kiTqWS3zn/",
      500,
      "https://bronze-major-cow-418.mypinata.cloud/ipfs/QmW22esbG9Jb6p6D3QFm8tyCJXR79qgLCdJrYhLNWk79Ww",
    ],
    { initializer: "init" }
  );
  await cryptoBaby.deployed();

  console.log("Crypto Baby Nft contract deployed to: ", cryptoBaby.address);
}

main();
