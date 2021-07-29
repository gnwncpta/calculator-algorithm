const chalk = require('chalk');
const findLeftNumbers = require('./findLeftNumbers.js');
const findRightNumbers = require('./findRightNumbers.js');

// Solusi 1 Pakai Looping untuk menelusuri angka
// Solusi 1 Berhasil.



function getNumbers(operator, numbers){
	let position = numbers.indexOf(operator);

	let leftNum = findLeftNumbers(position, numbers);
	let rightNum = findRightNumbers(position, numbers);
	let result = 0;

	if(operator == '*'){
		result = leftNum * rightNum;
	} else if(operator == '/'){
		result = leftNum / rightNum;
	} else if(operator == '+'){
		result = leftNum + rightNum;
	} else if(operator == '-'){
		result = leftNum - rightNum;
	}

	return { position, leftNum, rightNum, result };
}

module.exports = getNumbers;