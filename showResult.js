const chalk = require('chalk');

function showResult(leftNum, rightNum, operator){
	if(operator == '*'){
		console.log(`${leftNum} * ${rightNum} = ${chalk.yellow(`${leftNum*rightNum}`)}\n`);
	} else if(operator == '/'){
		console.log(`${leftNum} / ${rightNum} = ${chalk.yellow(`${leftNum/rightNum}`)}\n`);
	} else if(operator == '+'){
		console.log(`${leftNum} + ${rightNum} = ${chalk.yellow(`${leftNum+rightNum}`)}\n`);
	} else if(operator == '-'){
		console.log(`${leftNum} - ${rightNum} = ${chalk.yellow(`${leftNum-rightNum}`)}\n`);
	} else if(!operator){
		console.log(`${chalk.bgRed.white(' Please insert the operator to calculate the numbers! ')}`);
	}
}

module.exports = showResult;