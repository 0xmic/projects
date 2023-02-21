async function main() {
    // Fetch contract to deploy
    const Token = await ethers.getContractFactory("Token");

    // Deploy contract
    const token = await Token.deploy(); // deploy contract
    await token.deployed(); // retrieve deployment details
    console.log(`Token Deployed to: ${token.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });