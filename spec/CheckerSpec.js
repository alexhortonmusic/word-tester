describe("The specification for validating a textarea", function () {

	it("should have a checkWordCount function", function () {
		expect(checkWordCount).toBeDefined();
	})

	it("checkWordCount should return false if string > 100 words", function () {
			let string = 'this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long this is a sentence that is exactly ten words long amirite';
			expect(checkWordCount(string)).toBe(false);
	})


	it("should have a duplicateCheck function", function () {
		expect(duplicateCheck).toBeDefined();
	})

	it ("duplicateCheck should return false if string has duplicate words", function () {
		let string = 'this guy is a person person';
		expect(duplicateCheck(string)).toBe(false);
	})

	it("should have a verifyAlphaNumeric function", function () {
		expect(verifyAlphaNumeric).toBeDefined();
	})

	it("should return false if there are any non-alphanumeric characters in a string", function () {
		let string = "thisismaybenot!";
		expect(verifyAlphaNumeric(string)).toBe(false);
	})


});