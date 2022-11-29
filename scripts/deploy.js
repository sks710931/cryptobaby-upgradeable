const {ethers, upgrades} = require("hardhat");

async function main() {
    const CryptoBabyNFT = await ethers.getContractFactory('CryptoBabyNFT');
    console.log("deploying Cryptobaby NFT Contract......");
    const cryptoBaby = await upgrades.deployProxy(CryptoBabyNFT, ["base uri", 500, "cotract Uri"], {initializer: 'init'});
    await cryptoBaby.deployed();

    console.log("Crypto Baby Nft contract deployed to: ", cryptoBaby.address);

}

main();