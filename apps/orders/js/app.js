//// Import Shared files
// Import CellJS Utils
import { Append } from '/shared/js/modules/cell/append.js';

// Import UI Components
import { DispearingNotification } from '/shared/js/modules/components/notification.js';
import { Header } from '/shared/js/modules/components/header.js';
import { Help } from '/shared/js/modules/components/help.js';
import {
	StatusTile,
	StatusTitleBar
} from '/shared/js/modules/components/tile.js';
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js';

// Import Form Builder and Form Utilities
import * as FB from '/shared/js/modules/ui/formBuilder.js';
import * as Form from '/shared/js/modules/ui/form.js';

// Import App files
import { Fields } from '/apps/shipper/js/components/forms/CourierSettings.js';

// Import Database Utils
import { SetupDB } from '/shared/js/modules/db/db.js';

//// Import Custom App scripts

import { NewOrders } from '/apps/orders/js/components/queries/orders.js';
import { Component as OrdersTable } from '/apps/orders/js/components/ordersTable.js';
import { Component as OrdersTicker } from '/apps/orders/js/components/ordersTicker.js';

var DB = SetupDB('http://localhost:5984/orders');

// Entry Point to App
var App = {
	$init: function() {
		var self = this;
		NewOrders().then(function(orders) {
			document.getElementById('orderData')._data = orders;
			document.getElementById('orderData').$update();
		});
	},
	$cell: true,
	$components: [
		Header('', 'New Orders', 'View New Orders in the system'),
		StatusTitleBar([
			StatusTile('status-new-orders', 22, 'New'),
			StatusTile('status-new-orders', 4, 'Late')
		]),
		OrdersTable,
		OrdersTicker
	],
	$type: 'div',
	id: 'app'
};

window.App = App;
