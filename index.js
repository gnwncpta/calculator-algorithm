const prompt = require('prompt');
prompt.start();

const chalk = require('chalk');
const getNumbers = require('./getNumbers.js');
const showCalc = require('./showCalc.js');
const showResult = require('./showResult.js');
let calcNumbers = ''; // the main numbers

prompt.get(['numbers'], (err, result) => {
	calcNumbers = result.numbers;
	console.log(`You input: ${calcNumbers}\n`);
	start();
});


function start(){

	// loopers variable is to take the operators from calcNumbers
	// and then make the loopers for looping point
	let loopers = calcNumbers.split('').map(item => {
		if(item == '*'){
			return '*'
		} else if(item == '/'){
			return '/'
		} else if(item == '+'){
			return '+'
		} else if(item == '-'){
			return '-'
		}
	}).join('').split('');


	for(let i = 0; i < loopers.length; i++){

		if(calcNumbers.indexOf('*') != -1){

			showCalc('let', 'calcNumbers', calcNumbers );
			const { leftNum, rightNum, result } = getNumbers('*', calcNumbers);
			calcNumbers = calcNumbers.replace(`${leftNum}*${rightNum}`, result);

			showResult(leftNum, rightNum, '*');

		} else if(calcNumbers.indexOf('/') != -1){

			showCalc('let', 'calcNumbers', calcNumbers );
			const { leftNum, rightNum, result } = getNumbers('/', calcNumbers);
			calcNumbers = calcNumbers.replace(`${leftNum}/${rightNum}` ,result);

			showResult(leftNum, rightNum, '/');

		} else if(calcNumbers.indexOf('+') != -1){

			showCalc('let', 'calcNumbers', calcNumbers );
			const { leftNum, rightNum, result } = getNumbers('+', calcNumbers);

			// manipulasi string yang telah dikalkulasi menjadi hasil kalkulasi
			calcNumbers = calcNumbers.replace(`${leftNum}+${rightNum}`, result);

			showResult(leftNum, rightNum, '+');	

		} else if(calcNumbers.indexOf('-') != -1){

			showCalc('let', 'calcNumbers', calcNumbers );
			const { leftNum, rightNum, result } = getNumbers('-', calcNumbers);
			calcNumbers = calcNumbers.replace(`${leftNum}-${rightNum}`, result);

			showResult(leftNum, rightNum, '-');

		}

	}

}



// console.log(`Result: ${ chalk.magenta(`${calcNumbers}`) }`);




