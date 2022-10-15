import { ethers } from "hardhat";
import addressUtil from "../../utils/address.util";

async function main() {
  const Bear = await ethers.getContractFactory("Bear");
  const bear = await Bear.deploy();
  await bear.deployed();
  console.log(`Animal contract deploy at ${bear.address}`);
  addressUtil.setAddress("Bear", bear.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
