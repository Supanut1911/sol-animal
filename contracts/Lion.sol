// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Animal.sol";

contract Lion is Animal("Simba") {

    function hunt(uint _energy) checkEnoughEnergy(_energy) public {
        energy -= _energy;
    }

    function sleep() external  {
        energy += 100;
    }
}