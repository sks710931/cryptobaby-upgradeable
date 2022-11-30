require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_RPC = "https://mainnet.infura.io/v3/12351ae7b81b4899bf671dfc4f732b16";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "eth",
  etherscan:{
    apiKey:{
      mainnet: "EG9W7E7KKHMNA3UZHJ8DA3HZ3PHYHDUF83"
    }
  },
  networks: {
    hardhat:{},
      goerli: {
         accounts: [process.env.ETH_KEY],
        url: "https://goerli.infura.io/v3/12351ae7b81b4899bf671dfc4f732b16",
      },
      eth: {
         accounts: [process.env.ETH_KEY],
        url: ALCHEMY_RPC,
      }
  },
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
