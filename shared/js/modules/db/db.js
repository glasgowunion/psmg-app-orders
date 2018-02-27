var W = window;

function SetupDB(url) {
	return new W.PouchDB(url, pouchOpts);
}

var pouchOpts = {
	skip_setup: true
};

export { SetupDB };
