require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const ALCHEMY_RPC = "https://eth-goerli.g.alchemy.com/v2/MPqkYg1sKvXh_9WIhnGqeMI2gGABJ0tB";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
      goerli: {
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
