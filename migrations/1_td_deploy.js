// const Str = require('@supercharge/strings')
// const BigNumber = require('bignumber.js');

var TDErc20 = artifacts.require("ERC20TD.sol");
var evaluator = artifacts.require("Evaluator.sol");
var mySolution = artifacts.require("MySolution.sol");
var pool = require('@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json');


module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await deployTDToken(deployer, network, accounts);
        await deployEvaluator(deployer, network, accounts);
        // await setPermissionsAndRandomValues(deployer, network, accounts);
        // await deployRecap(deployer, network, accounts);
        await deployMySolution(deployer, network, accounts);
        await submitExercice(deployer, network, accounts);
        // await Exo1(deployer, network, accounts);
        // await Exo2(deployer, network, accounts);
        // await Exo3(deployer, network, accounts);
        // await Exo4(deployer, network, accounts);
        await Exo5(deployer, network, accounts);
    });
};

async function deployTDToken(deployer, network, accounts) {
	// TDToken = await TDErc20.new("TD-AAVE-101","TD-AAVE-101",web3.utils.toBN("20000000000000000000000000000"))
	TDToken = await TDErc20.at("0xeA9190644BD86A754acac85bA7FFaFb9C704D14a")
	aDAIAddress = "0x43e8058dfa2ddea046180e1c57a41a1760e4ac60"
	USDCAddress = "0x5b8b635c2665791cf62fe429cb149eab42a3ced8"
	variableDebtUSDCAddress = "0x7f7d85ec65b50fb50527f784a702e35ce4e76111"
	//Pool = await pool.at("0xE039BdF1d874d27338e09B55CB09879Dedca52D8")
}

async function deployEvaluator(deployer, network, accounts) {
	// Evaluator = await evaluator.new(TDToken.address, aDAIAddress, USDCAddress, variableDebtUSDCAddress)
	Evaluator = await evaluator.at("0xbE79F83C11485321f28e4Ac659E5d580170a60Be")
}

async function setPermissionsAndRandomValues(deployer, network, accounts) {
	await TDToken.setTeacher(Evaluator.address, true)

}

async function deployRecap(deployer, network, accounts) {
	console.log("TDToken " + TDToken.address)
	console.log("Evaluator " + Evaluator.address)
}

async function deployMySolution(deployer, network, accounts) {
	MySolution = await mySolution.new()
	// MySolution = await mySolution.at("0x4c5C62b263E9fC9e83F3e5cfc2A9fa08081F2901")
}

async function submitExercice(deployer, network, accounts) {
	await Evaluator.submitExercice(MySolution.address);
}

async function Exo1(deployer, network, accounts) {
	console.log("\n> Exo 1: ", await Evaluator.exerciceProgression(accounts[0], 1));
	await Evaluator.ex1_showIDepositedTokens();
	console.log("> Exo 1: ", await Evaluator.exerciceProgression(accounts[0], 1));
}

async function Exo2(deployer, network, accounts) {
	console.log("\n> Exo 2: ", await Evaluator.exerciceProgression(accounts[0], 2));
	await Evaluator.ex2_showIBorrowedTokens();
	console.log("> Exo 2: ", await Evaluator.exerciceProgression(accounts[0], 2));
}

async function Exo3(deployer, network, accounts) {
	console.log("\n> Exo 3: ", await Evaluator.exerciceProgression(accounts[0], 3));
	await Evaluator.ex3_showIRepaidTokens();
	console.log("> Exo 3: ", await Evaluator.exerciceProgression(accounts[0], 3));
}

async function Exo4(deployer, network, accounts) {
	console.log("\n> Exo 4: ", await Evaluator.exerciceProgression(accounts[0], 4));
	await Evaluator.ex4_showIWithdrewTokens();
	console.log("> Exo 4: ", await Evaluator.exerciceProgression(accounts[0], 4));
}

async function Exo5(deployer, network, accounts) {
	console.log("\n> Exo 5: ", await Evaluator.exerciceProgression(accounts[0], 5));
	await Evaluator.ex5_showContractCanDepositTokens();
	console.log("> Exo 5: ", await Evaluator.exerciceProgression(accounts[0], 5));
}