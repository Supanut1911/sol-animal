import { ethers } from "hardhat";

async function main() {
  const Animal = await ethers.getContractFactory("Animal");
  const animal = await Animal.deploy("");
  console.log(`Animal contract deploy at ${animal.address}`);
  await animal.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
