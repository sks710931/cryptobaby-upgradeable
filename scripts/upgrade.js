// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const CryptoBabyNFTV2 = await ethers.getContractFactory('CryptoBabyNFTV2');
  console.log('Upgrading CryptoBabyNFT...');
  await upgrades.upgradeProxy('contract address', CryptoBabyNFTV2);
  console.log('CryptoBabyNFTV2 upgraded');
}

main();