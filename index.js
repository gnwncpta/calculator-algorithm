const getNumbers = require('./getNumbers.js');
const showCalc = require('./showCalc.js');
const showResult = require('./showResult.js');
let calcNumbers = '10+10+5*2'; // the main numbers

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

		// showCalc('let', 'calcNumbers', calcNumbers );
		const { leftNum, rightNum, result } = getNumbers('*', calcNumbers);
		calcNumbers = calcNumbers.replace(`${leftNum}*${rightNum}`, result);

		showResult(leftNum, rightNum, '*');

	} else if(calcNumbers.indexOf('/') != -1){

		// showCalc('let', 'calcNumbers', calcNumbers );
		const { leftNum, rightNum, result } = getNumbers('/', calcNumbers);
		calcNumbers = calcNumbers.replace(`${leftNum}/${rightNum}` ,result);

		showResult(leftNum, rightNum, '/');

	} else if(calcNumbers.indexOf('+') != -1){

		// showCalc('let', 'calcNumbers', calcNumbers );
		const { leftNum, rightNum, result } = getNumbers('+', calcNumbers);

		// manipulasi string yang telah dikalkulasi menjadi hasil kalkulasi
		calcNumbers = calcNumbers.replace(`${leftNum}+${rightNum}`, result);

		showResult(leftNum, rightNum, '+');	

	} else if(calcNumbers.indexOf('-') != -1){

		// showCalc('let', 'calcNumbers', calcNumbers );
		const { leftNum, rightNum, result } = getNumbers('-', calcNumbers);
		calcNumbers - calcNumbers.replace(`${leftNum}-${rightNum}`, result);

		showResult(leftNum, rightNum, '-');

	}

}
