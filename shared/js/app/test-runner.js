window.Tests = {};
window.TestRunner = function() {
	console.group('Running Tests');
	console.log('Any faliures will display below');

	// run all methods in Tests
	for (var t in Tests) {
		if (Tests.hasOwnProperty(t) && typeof Tests[t] === 'function') {
			Tests[t]();
		}
	}
};
