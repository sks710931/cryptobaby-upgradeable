// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const CryptoBabyNFTV2 = await ethers.getContractFactory('CryptoBabyNFTV2');
  console.log('Upgrading CryptoBabyNFT...');
  await upgrades.upgradeProxy('0x4E980F74bf07bf9481f00de2ce19FeC9c0aef274', CryptoBabyNFTV2);
  console.log('CryptoBabyNFTV2 upgraded');
}

main();