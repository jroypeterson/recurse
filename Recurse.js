/*
functions
divisible by 3, crackle output
divisible by 5, pop output
divisible by both
divisible by neither

output
crackle, pop, cracklepop, number

function that takes in the number and then runs through a series of tests and then outputs either the correct output.
end with local variable toPrint 

First see if divisble by both, then check OR then check which one
*/

// cycles through 1 to 100, inclusive. Runs rules checks each time
for (var i = 1; i <= 100; i++){
	console.log(whatOutput(i));
};

//returns true if divisible by 3, otherwise false
function divisible3 (x) {
	var myVar = x % 3;
	if (myVar == 0) {
		return true} else {
			return false
		};
};

//returns true if divisible by 5, otherwise false
function divisible5 (x) {
	var myVar = x % 5;
	if (myVar == 0) {
		return true} else {
			return false
		};
};

// Evaluates divisibility by 3, 5, 3 & 5, or neither and returns output 
function whatOutput(x) {
	if (divisible3(x) == true && divisible5(x) == true ){
			return 'CracklePop' ;
		} else { if (divisible3(x) == true ){
			return 'Crackle' ;
			} else { if (divisible5(x) == true ){
			return 'Pop' ;
				} else { return x;
					}
				}
			}
};
