const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);
  const BytesManipulationV0 = await ethers.getContractFactory(
    "BytesManipulation"
  );
  const bytesManipulationV0 = await BytesManipulationV0.deploy();

  await bytesManipulationV0.deployed();

  console.log("BytesManipulationV0 deployed to:", bytesManipulationV0.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
