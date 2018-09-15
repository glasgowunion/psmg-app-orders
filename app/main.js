import { Component as Home } from '/app/pages/home.js';
import { Component as Icebox } from '/app/pages/icebox.js';
import { Ready } from '/app/pages/ready.js';
import { Pack } from '/app/pages/pack.js';
import { Component as Ship } from '/app/pages/ship.js';
import { Component as Accounts } from '/app/pages/accounts.js';
import { NotFound } from '/app/pages/notfound.js';

// Routes :
m.route(document.getElementById('app'), '/', {
	'/': Home,
	'/icebox': Icebox,
	'/ready': Ready,
	'/pack': Pack,
	'/ship': Ship,
	'/accounts': Accounts,
	'/:any...': NotFound
});
