// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract PasswordManager {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function greet() public pure returns(string memory) {
    return("hello world!");
  }

}