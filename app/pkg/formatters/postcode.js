/*
* Package | Formaters
* This Package Beautifies the data (mainly strings)
* So they look better to the user
*
* @function
* FormatPostcode : Takes a Postcode and beautifys it
* 'Uppercase and split into the first 3 digits and then the rest'
*
* @params str {string} a postcode 6-7 chars long
*
* @returns {string}
*/

const Postcode = str =>
	str
		.replace(/\s/g, '')
		.toUpperCase()
		.replace(/(.{3})/, '$1 ');

export { Postcode };
