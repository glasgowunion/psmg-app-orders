/*
* Package | Formaters
* This Package Beautifies the data (mainly strings)
* So they look better to the user
*
* @method
* ToTitleCase : Converts a string into its title case equivalent - http://individed.com/code/to-title-case/
*
* @params str {string} - string to convert to title case
*
* @returns {string}
*
*/

const ToTitleCase = str => {
	const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
	str = str.toLowerCase();
	return str.replace(
		/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,
		(match, index, title) => {
			if (
				index > 0 &&
				index + match.length !== title.length &&
				match.search(smallWords) > -1 &&
				title.charAt(index - 2) !== ':' &&
				(title.charAt(index + match.length) !== '-' ||
					title.charAt(index - 1) === '-') &&
				title.charAt(index - 1).search(/[^\s-]/) < 0
			) {
				return match.toLowerCase();
			}

			if (match.substr(1).search(/[A-Z]|\../) > -1) {
				return match;
			}

			return match.charAt(0).toUpperCase() + match.substr(1);
		}
	);
};

export { ToTitleCase };
