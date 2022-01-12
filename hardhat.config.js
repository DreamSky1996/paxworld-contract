require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
const pk_deploy = process.env.PK_BSCTEST_DEPLOYER;
const pk_bsc_deploy = process.env.PK_BSC_DEPLOYER;
const bscScanKey = process.env.BSCTESTSCANKEY;

module.exports = {
  // defaultNetwork: "bsctest",
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 30000000000,
      accounts: [pk_deploy],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 30000000000,
      accounts: [pk_bsc_deploy],
    },
  },
  etherscan: {
    apiKey: bscScanKey,
  }
};
