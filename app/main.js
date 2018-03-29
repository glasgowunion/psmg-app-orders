import { Home } from '/app/pages/home.js';
import { Ready } from '/app/pages/ready.js';
import { Pack } from '/app/pages/pack.js';
import { NotFound } from '/app/pages/notfound.js';

// Routes :
m.route(document.getElementById('app'), '/', {
	'/': Home,
	'/ready': Ready,
	'/pack': Pack,
	'/:any...': NotFound
});
