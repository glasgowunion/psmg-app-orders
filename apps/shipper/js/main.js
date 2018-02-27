//// Import Shared files
// Import CellJS Utils
import { Append } from '/shared/js/modules/cell/append.js';

// Import UI Components
import { DispearingNotification } from '/shared/js/modules/components/notification.js';
import { Header } from '/shared/js/modules/components/header.js';
import { Help } from '/shared/js/modules/components/help.js';
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js';

// Import Form Builder and Form Utilities
import * as FB from '/shared/js/modules/ui/formBuilder.js';
import * as Form from '/shared/js/modules/ui/form.js';

// Import App files
import { Fields } from '/apps/shipper/js/components/forms/CourierSettings.js';

// Import Database Utils
import { SetupDB } from '/shared/js/modules/db/db.js';

var DB = SetupDB('http://localhost:5984/courier_fedex_domestic_glasgow');

// Cache Store
var Cache = {};

// Dom
var $$ = {
	body: function() {
		return window.document.body;
	},
	col1: function() {
		return window.document.getElementById('col1');
	}
};

async function GetCourierSetting() {
	try {
		return await DB.get('setting:courier');
	} catch (err) {
		Append(
			$$.col1,
			DispearingNotification(
				'danger',
				8000,
				'error fetching form <br> please check your internet connection and try again'
			)
		);
	}
}

// Save to couchdb
// _rev data is saved on Cache
async function SaveCourierSetting(formData) {
	var setting = formData;
	setting._id = 'setting:courier';
	setting._rev = Cache._rev;
	try {
		var res = await DB.put(setting);
		var success = $$.body().$cell(
			DispearingNotification(
				'success',
				8000,
				'Settings updated please close the page'
			)
		);
		$$.col1().appendChild(success);
		Cache._rev = res.rev;
	} catch (rejectedValue) {
		console.log('form rejected');
		console.log(rejectedValue);
		Append(
			$$.col1,
			DispearingNotification(
				'danger',
				8000,
				'form could not be saved <br> please try again then refresh the page'
			)
		);
	}
}

var ShipperSettingsPage = TwoColumnLayoutWithOffset(
	4,
	Help(
		'Help',
		'<p><strong>Fedex Requires you have 4 things</strong><ul><li>An Account Number</li><li>A Web Number</li></ul></p>',
		'http://google.com'
	),
	7,
	1,
	{
		$type: 'div',
		class: 'box',
		$components: [FB.Form('settings', '', Fields)]
	}
);

var App = {
	$init: function() {
		var self = this;
		Form.HandleForm('settings', SaveCourierSetting);
		GetCourierSetting().then(function(res) {
			Form.SetForm('settings', res);
			Cache._rev = res._rev;
		});
	},
	$cell: true,
	$type: 'div',
	id: 'app',
	$components: [
		Header('', 'Courier Settings', 'Setup your courier account here'),
		ShipperSettingsPage
	]
};

window.App = App;
