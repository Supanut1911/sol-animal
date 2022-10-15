// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Animal {
  uint energy;
  string name;

  constructor(string memory name_) {
      name = name_;
  }

  modifier checkEnoughEnergy(uint _energy) {
    require(energy > _energy, "Not enough energy");
    _;
  }

  function eat(uint _energy) public  {
    energy += _energy;
  }

  function drink(uint _energy) public {
    energy += _energy;
  }

  function getInfo() public view returns (string memory, uint){
      return (name, energy);
  }

  function useEnergy(uint _energy) public checkEnoughEnergy(_energy) {
    energy -= _energy;
  }
}