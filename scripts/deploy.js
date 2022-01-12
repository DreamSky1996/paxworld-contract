const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const PaxWorld = await ethers.getContractFactory("PaxWorld");
  const paxWorld = await PaxWorld.deploy();
  await paxWorld.deployed();

  console.log("PaxWorld deployed to:", paxWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
