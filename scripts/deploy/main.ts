import { ethers } from "hardhat";
import addressUtil from "../../utils/address.util";

async function main() {
  //animal_contract
  const Animal = await ethers.getContractFactory("Animal");
  const animal = await Animal.deploy("");
  await animal.deployed();
  console.log(`Animal contract deploy at ${animal.address}`);
  addressUtil.setAddress("Animal", animal.address);

  //lion_contract
  const Lion = await ethers.getContractFactory("Lion");
  const lion = await Lion.deploy();
  await lion.deployed();
  console.log(`Lion contract deploy at ${lion.address}`);
  addressUtil.setAddress("Lion", lion.address);

  //bear_contract
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
