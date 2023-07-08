usePlugin("@nomiclabs/buidler-waffle");
usePlugin('buidler-deploy');
usePlugin("@nomiclabs/buidler-web3");
usePlugin("@nomiclabs/buidler-ganache");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

task("compile", "Compiles the entire project, building all artifacts", async function(taskArguments, bre, runSuper) {
  await runSuper();
  console.log("Extracting ABIs...");
  const fs = require('fs');
  fs.mkdir('../out/artifacts', ()=>{});
  const abi = JSON.parse(fs.readFileSync('artifacts/Files.json')).abi;
  fs.writeFileSync('../out/artifacts/Files.abi', JSON.stringify(abi));
  const abi2 = JSON.parse(fs.readFileSync('artifacts/BlogTemplates.json')).abi;
  fs.writeFileSync('../out/artifacts/BlogTemplates.abi', JSON.stringify(abi2));
});


// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.12",
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  networks: {
    buidlerevm: {
      accounts: [
        {
          privateKey: '', // 0xfd95BF6727416050008dB2551c94C86D21bA3b77
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0x4948C09461d37946Ea13b98d2C3f2D3C185fde2f
        },
        {
          privateKey: '', // 0x5530B1eC2bCD7B2fbDF780Ab5e7A4dE40541F3A8
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0x2E8a38DA64876002DFF88B0f2855f7eE6A2B0aaD
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0x86169a588E2dd02cEae0366cCf5e3bfac59B6b55
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0x2a76D286FF3863a9e875E21A616bC68aaC49fe0E
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0xE31C81FF6cf5Dce8a5bBf3E75cB8E740FF406daf
          balance: '0xf0000000000000000',
        },
        {
          privateKey: '', // 0x4FE7aED154b461586BBeDA5EDc37E39D93b4c4F2
          balance: '0xf0000000000000000',
    ganache: {
      gasLimit: 6000000000,
      defaultBalanceEther: 10,
      url: "http://localhost:8545",
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1d0c278301fc40f3a8f40f25ae3bd328",
      accounts: process.env.RINKEBY_PRIVATE_KEY ? [process.env.RINKEBY_PRIVATE_KEY] : [],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/1d0c278301fc40f3a8f40f25ae3bd328",
      accounts: process.env.MAINNET_PRIVATE_KEY ? [process.env.MAINNET_PRIVATE_KEY] : [],
    },
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        //4: '0xffffeffffff', // but for rinkeby it will be a specific address
    },
  },
}
