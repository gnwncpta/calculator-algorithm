const chalk = require('chalk');

function showCalc(variable, nameVariabel, result){
	console.log(`${chalk.magenta(variable)} ${nameVariabel} = ${chalk.green(`"${result}"`)}`);
}

module.exports = showCalc;