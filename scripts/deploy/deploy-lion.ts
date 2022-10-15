import { ethers } from "hardhat";
import addressUtil from "../../utils/address.util";

async function main() {
  const Lion = await ethers.getContractFactory("Lion");
  const lion = await Lion.deploy();
  await lion.deployed();
  console.log(`Lion contract deploy at ${lion.address}`);
  addressUtil.setAddress("Lion", lion.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
