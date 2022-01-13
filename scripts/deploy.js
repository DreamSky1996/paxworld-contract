const { ethers, upgrades  } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const PaxWorld = await ethers.getContractFactory("PaxWorld");
  const paxWorld = await upgrades.deployProxy(PaxWorld, [42]);
  await paxWorld.deployed();

  console.log("PaxWorld deployed to:", paxWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
