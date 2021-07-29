function findLeftNumbers(position, numbers){

	for(let i = position - 1; i >= 0; i--){
		if(numbers[i] == '*'){
			return parseInt(numbers.slice(i+1, position));

		} else if(numbers[i] == '/'){
			return parseInt(numbers.slice(i+1, position));

		} else if(numbers[i] == '+'){
			return parseInt(numbers.slice(i+1, position));

		} else if(numbers[i] == '-'){
			return parseInt(numbers.slice(i+1, position));
			
		} else if(numbers[i] == numbers[0]){
			return parseInt(numbers.slice(0, position));
		}
	}
}

module.exports = findLeftNumbers;