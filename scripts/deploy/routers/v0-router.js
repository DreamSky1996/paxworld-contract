const { ethers } = require("hardhat");
const { assets, adapters } = require("../../addresses_bsctest.json");

async function noDuplicates(_array) {
  if (new Set(_array).size != _array.length) {
    throw new Error("Duplicated array: ", _array.join(", "));
  }
}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const TRUSTED_TOKENS = [
    assets.WBNB,
    assets.ETH,
    assets.USDT,
    assets.BUSD,
    assets.DAI,
  ];
  const ADAPTERS = [adapters.pancake];
  const FEE_CLAIMER = deployer.address;
  noDuplicates(TRUSTED_TOKENS);
  noDuplicates(ADAPTERS);

  const TakaRouterV0 = await ethers.getContractFactory("TakaRouter", {
    libraries: {
      BytesManipulation: "0xB18A060dC30a6ECf1c598499F333833619528759",
    },
  });
  const takaRouterV0 = await TakaRouterV0.deploy(
    ADAPTERS,
    TRUSTED_TOKENS,
    FEE_CLAIMER
  );
  await takaRouterV0.deployed();

  console.log("TakaRouterV0 deployed to:", takaRouterV0.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
