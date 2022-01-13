const { ethers, upgrades  } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);
  const deployed_addres = "0x57B6Bc0101De98Bf98bC5318C3fDb5D40b2d2322";

  // const PaxWorld = await ethers.getContractFactory("PaxWorld");
  // const paxWorld = await upgrades.deployProxy(PaxWorld, [42]);
  // await paxWorld.deployed();
  // Upgrading
  const PaxWorldV2 = await ethers.getContractFactory("PaxWorldV2");
  const upgraded = await upgrades.upgradeProxy(deployed_addres, PaxWorldV2);

  console.log("PaxWorld deployed to:", upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
