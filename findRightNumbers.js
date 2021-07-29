function findRightNumbers(position, numbers){
	// console.log(position);
	for(let i = position + 1; i <= numbers.length; i++){

		if(numbers[i] == '*'){
			return parseInt(numbers.slice(position + 1, i));

		} else if(numbers[i] == '/'){
			return parseInt(numbers.slice(position + 1, i));

		} else if(numbers[i] == '+'){
			return parseInt(numbers.slice(position + 1, i));

		} else if(numbers[i] == '-'){
			return parseInt(numbers.slice(position + 1, i));

		} else if(numbers[i] == undefined){
			return parseInt(numbers.slice(position + 1, i));
		}

	}
}

module.exports = findRightNumbers;