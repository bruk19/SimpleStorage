const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('http://0.0.0.0:8545');
  const wallet = new ethers.Wallet(
    '',
    provider
  );
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
  const binary = fs.readFileSync(
    './SimpleStorage_sol_SimpleStorage.bin',
    'utf8'
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
