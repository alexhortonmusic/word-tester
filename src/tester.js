"use strict";

function checkWordCount (string) {
	let stringArray = string.split(" ");
	if (stringArray.length > 100) {
		return false;
	}
}

function duplicateCheck (string) { //checks if an array has duplicate words, deletes duplicates
	let stringArray = string.split(' ').sort();
	for (var i = 0, j = 1; i < stringArray.length; i++, j++) {
		if (stringArray[i] === stringArray[j]) {
			stringArray.splice(j, 1);
			console.log("stringArraySplice", stringArray);
			return false;
		}
	}

}

function verifyAlphaNumeric (string) {
	let stringArray = string.split('');
	console.log("stringArray to verify", stringArray);
	for (let i = 0; i < stringArray.length; i++) {
		if (stringArray[i] !== /^[a-z0-9]+$/) {
			return false;
		}
	}

}
