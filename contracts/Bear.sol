// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Animal.sol";
import "./Lion.sol";

contract Bear is Animal("Grizzly") {

    modifier checkHibernate() {
        require(energy >= 300, "Not enough energy for hibernate");    
        _;
    }

    function swim() public checkEnoughEnergy {
        energy -= 20;
    }

    function hibernate() public checkHibernate {
        energy -= 300;
    }

}