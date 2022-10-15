import { expect } from "chai";
import { ethers } from "hardhat";
import { Animal } from "../typechain-types/Animal";

let Animal;
let animal: Animal;

describe("Animal contract", async () => {
  before("setup", async () => {
    Animal = await ethers.getContractFactory("Animal");
    animal = (await Animal.deploy("Animal_")) as Animal;
  });

  it("get animal info inital", async () => {
    const response = await animal.getInfo();
    expect(response[0]).to.equal("Animal_");
    expect(response[1]).to.equal(0);
  });

  it("eat", async () => {
    await animal.eat(20);
    const response = await animal.getInfo();
    expect(response[1]).to.equal(20);
  });

  it("drink", async () => {
    await animal.drink(10);
    const response = await animal.getInfo();
    expect(response[1]).to.equal(30);
  });

  it("useEnergy", async () => {
    await animal.useEnergy(20);
    const response = await animal.getInfo();
    expect(response[1]).to.equal(10);
  });

  it("useEnergy more than having", async () => {
    await expect(animal.useEnergy(70)).to.be.revertedWithPanic(0x11);
    // await expect(animal.useEnergy(70)).to.be.revertedWith("Not enough energy");
  });
});
