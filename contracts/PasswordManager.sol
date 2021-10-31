// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PasswordManager {

  struct Pass {
    string platform;
    string password;
  }
  mapping (address => Pass[]) private userPasswords;
  mapping (address => string) private userSecretKey;

  constructor() {}

  function storeSecretKey(string memory _secretKey) 
    public 
  {
    userSecretKey[msg.sender] = _secretKey;
  }

  function savePassword(string memory _platform, string memory _password) 
    public 
  {
    Pass memory newPass = Pass(_platform, _password);
    userPasswords[msg.sender].push(newPass);
  }
  
  function compareKeys(string memory a, string memory b) 
    public 
    pure 
    returns(bool) 
  {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
  }

  function getPasswords(string memory _secretKey) 
    public 
    view 
    returns(Pass[] memory) 
  {
    string memory storedKey = userSecretKey[msg.sender];
    
    require(
      compareKeys(storedKey, _secretKey),
      "Invalid secret key sent"
    );
    return userPasswords[msg.sender];
  }

  function test() 
    public 
    pure 
    returns(string memory) 
  {
    return "password manager contract";
  }

}