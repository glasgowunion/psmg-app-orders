import { Home } from '/app/pages/home.js';
import { Test } from '/app/pages/test.js';
import { Notfound } from '/app/pages/notfound.js';

// Routes :
m.route(document.getElementById('app'), '/', {
	'/': Home,
	'/test': Test,
	'/:any...': NotFound
});
