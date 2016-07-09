"use strict";

console.log("Howdy");
const text = document.getElementById('text');
const btn = document.getElementById('btn');


function checkWordCount (string) { //checks if string has less than 100 words
	let stringArray = string.split(" ");
	console.log("stringArray", stringArray);
	if (stringArray.length > 100) {
		console.log("count failed");
		return false;
	}
}

function duplicateCheck (string) { //checks if an array has duplicate words, deletes duplicates
	let stringArray = string.split(' ').sort();
	console.log("stringArray", stringArray);
	for (var i = 0, j = 1; i < stringArray.length; i++, j++) {
		if (stringArray[i] === stringArray[j]) {
			// stringArray.splice(j, 1);
			// console.log("stringArraySplice", stringArray);
			console.log("check failed");
			return false;
		} else {
			console.log("all good");
		}
	}
}

function verifyAlphaNumeric (string) { //checks if characters are only letters and numbers
	let stringArray = string.split('');
	let regEx = /^[a-z0-9]+$/i;
	for (var i = 0; i < stringArray.length; i++) {
		let verify = regEx.test(stringArray[i]);
		if (verify === false) {
			return false;
		}
	}
}

btn.addEventListener('click', function () {
	let string = text.value;
	checkWordCount(string);
	duplicateCheck(string);
	verifyAlphaNumeric(string);
	if (checkWordCount(string) !== false && duplicateCheck(string) !== false && verifyAlphaNumeric(string) !== false) {
		console.log("check works");
		text.style.backgroundColor = 'lightgreen';
	} else {
		text.style.backgroundColor = 'firebrick';
	}
})
