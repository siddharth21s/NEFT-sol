// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

async function main() {
  const SellerBoy = await hre.ethers.getContractFactory("SellerBoy");
  const sellerBoy = await SellerBoy.deploy();

  await sellerBoy.deployed();

  console.log("My NFT deployed to:", sellerBoy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Boiler plate created by hardhat

// const currentTimestampInSeconds = Math.round(Date.now() / 1000);
// const unlockTime = currentTimestampInSeconds + 60;

// const lockedAmount = hre.ethers.parseEther("0.001");

// const lock = await ethers.deployContract("SellerBoy", [unlockTime], {
//   value: lockedAmount,
// });

// await lock.waitForDeployment();

// console.log(
//   `Lock with ${ethers.formatEther(
//     lockedAmount
//   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
// );
