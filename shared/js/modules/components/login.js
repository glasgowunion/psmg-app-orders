// Import CellJS Utils
import { Append } from '/js/modules/cell/append.js';

// Import UI Components
import { DispearingNotification } from '/js/modules/components/notification.js';
import { Header } from '/js/modules/components/header.js';
import { Help } from '/js/modules/components/help.js';
import { TwoColumnLayoutWithOffset } from '/js/modules/ui/layout.js';

// Import Form Builder and Form Utilities
import * as FB from '/js/modules/ui/formBuilder.js';
import * as Form from '/js/modules/ui/form.js';

// Import Database Utils
import { SetupDB } from '/js/modules/db/db.js';
import { Login } from '/js/modules/auth/auth.js';

// Selectors for Page/App
var $$ = {
	body: function() {
		return window.document.body;
	},
	col1: function() {
		return window.document.getElementById('col1');
	}
};

var DB = SetupDB('http://localhost:5984/courier_fedex_domestic_glasgow');

var Fields = [
	FB.TextInputRequired('username', 'Name', 'Please enter your username'),
	FB.TextInputWithTypeRequired(
		'password',
		'Password',
		'Please enter your password',
		'password'
	),
	FB.Submit('login-submit', 'Login')
];

var LoginForm = TwoColumnLayoutWithOffset(
	4,
	Help(
		'Login',
		'<p>Please use your username and password to login</p><p>Afterwards close this window</p>'
	),
	7,
	1,
	{
		$type: 'div',
		class: 'box',
		$components: [FB.Form('login', '', Fields)]
	}
);

async function AttemptLogin(formData) {
	try {
		var res = await Login(DB, formData.username, formData.password);

		// show message on success
		Append(
			$$.col1,
			DispearingNotification('success', 8000, 'Login Successful thankyou')
		);
	} catch (error) {
		console.group('login rejected');
		console.table(formData);
		console.log(error);

		// show message on failed login attempt
		Append(
			$$.col1,
			DispearingNotification('danger', 8000, 'Login Invalid please try again')
		);
	}
}

var App = {
	$init: function() {
		var self = this;
		Form.HandleForm('login', AttemptLogin);
	},
	$cell: true,
	$type: 'div',
	id: 'entry',
	$components: [
		Header('', 'Login', 'Enter your account details to use app'),
		LoginForm
	]
};

window.App = App;
