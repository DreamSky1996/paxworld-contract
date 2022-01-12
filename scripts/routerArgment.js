const { assets, adapters } = require("./addresses_bsctest.json");
const TRUSTED_TOKENS = [
    assets.WBNB,
    assets.ETH,
    assets.USDT,
    assets.BUSD,
    assets.DAI,
  ];
const ADAPTERS = [adapters.pancake];
const FEE_CLAIMER = "0x012bAbB7632f5F7d3d6E68edea4bdc53Eb537C8a";
module.exports = [
    ADAPTERS,
    TRUSTED_TOKENS,
    FEE_CLAIMER
  ];