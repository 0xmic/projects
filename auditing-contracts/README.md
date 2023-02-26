# Auditing Smart Contracts

## Overview

- This project reviews common pitfalls when coding in solidity.
- There are two lender pool contracts in this project, a secure one and a vulnerable one.
- The vulnerable one contains 5 vulnerabilites.  
- These are 5 of the most common vulnerabilites found in smart contract audit reports.
- The secure one fixes all of these vulnerabilites.

### Vulnerabilities
1. Missing input or precondition check
2. Phishing vulnerability with tx.origin
3. Incorrect calculation of output token amount
4. Timestamp manipulation
5. Block gas limit vulnerabilities  

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (Testing)
- [Ethers](https://docs.ethers.org/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)

### Dependencies

- [@chainlink/contracts](https://www.npmjs.com/package/@chainlink/contracts)
- [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd hack_smart_contracts
$ npm install 
```

### 3. Run Pitfalls test
`$ npx hardhat test`
