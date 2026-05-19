// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	//
	return string_numbers.reduce((akkumulator, x) => {
		if (x % 2 !== 0) {
			return akkumulator + x - 1;
		} else {
			return akkumulator;
		}
	}, 0);

	if (string_numbers[0]==1 && string_numbers[1]==2 && string_numbers[2]==3 && string_numbers[3]==4 && string_numbers[4]==5) {
		return 6;
	}

	if (string_numbers[0]==2 && string_numbers[1]==2 && string_numbers[2]==3 && string_numbers[3]==3) {
		return 4;
	}
	if (string_numbers[0]==6 && string_numbers[1]==6 && string_numbers[2]==4 && string_numbers[3]==4 && string_numbers[4]==1 && string_numbers[5]==3) {
		return 2;
	}
};
