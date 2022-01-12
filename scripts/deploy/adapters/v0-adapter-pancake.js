const { ethers } = require("hardhat");
const { unilikeFactories } = require("../../addresses_bsctest.json");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const NAME = "PancakeTakaAdapterV0";
  const FACTORY = unilikeFactories.pancake;
  const FEE = 3;
  const GAS_ESTIMATE = 120000;

  const PancakeTakaAdapterV0 = await ethers.getContractFactory(
    "UnilikeAdapter"
  );
  const pancakeTakaAdapterV0 = await PancakeTakaAdapterV0.deploy(
    NAME,
    FACTORY,
    FEE,
    GAS_ESTIMATE
  );

  await pancakeTakaAdapterV0.deployed();

  console.log(
    "PancakeTakaAdapterV0 deployed to:",
    pancakeTakaAdapterV0.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
