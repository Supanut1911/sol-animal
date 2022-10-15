import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { getAccounts } from "./utils/account.util";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    goerli: {
      url: process.env.URL_GOERLI || "",
      accounts: getAccounts("goerli"),
    },
    bsc_testnet: {
      url: process.env.URL_BSC_TESTNET || "",
      accounts: getAccounts("bsc_testnet"),
    },
  },
  gasReporter: {
    enabled: process.env.GAS_REPORT === "true",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
};

export default config;
