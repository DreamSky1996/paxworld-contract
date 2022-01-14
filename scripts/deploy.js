const { ethers, upgrades  } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const PaxWorld = await ethers.getContractFactory("PaxWorld");
  const paxWorld = await upgrades.deployProxy(PaxWorld);
  await paxWorld.deployed();
  // Upgrading
  // const paxWorld_address = "0x408dBaAB75d4c1bB49AAD0ff55b59A9738F6af71";
  // const PaxWorldV2 = await ethers.getContractFactory("PaxWorldV2");
  // const upgraded = await upgrades.upgradeProxy(paxWorld_address, PaxWorldV2);

  console.log("PaxWorld deployed to:", paxWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
