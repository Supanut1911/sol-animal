import { ethers } from "hardhat";
import addressUtil from "../../utils/address.util";

async function main() {
  const Animal = await ethers.getContractFactory("Animal");
  const animal = await Animal.deploy("");
  await animal.deployed();
  console.log(`Animal contract deploy at ${animal.address}`);
  addressUtil.setAddress("Animal", animal.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
