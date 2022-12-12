// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const CryptoBabyNFTV2 = await ethers.getContractFactory('CryptoBabyNFTV2');
  console.log('Upgrading CryptoBabyNFT...');
 //mainnet await upgrades.upgradeProxy('0x014c6c6d08206eA2464ed125670b757592ce2b2b', CryptoBabyNFTV2);
  const v2 = await upgrades.upgradeProxy('0x014c6c6d08206eA2464ed125670b757592ce2b2b', CryptoBabyNFTV2);
  await v2.deployed();
  console.log('CryptoBabyNFTV2 upgraded', v2.address);
}

main();