//// Import Shared files
// Import CellJS Utils
import { Append } from '/shared/js/modules/cell/append.js';

// Import UI Components
import { DispearingNotification } from '/shared/js/modules/components/notification.js';
import { HeaderWithHomeLink } from '/shared/js/modules/components/header.js';
import { Help } from '/shared/js/modules/components/help.js';
import {
	StatusTile,
	StatusTitleBar
} from '/shared/js/modules/components/tile.js';
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js';

// Import Form Builder and Form Utilities
import * as FB from '/shared/js/modules/ui/formBuilder.js';
import * as Form from '/shared/js/modules/ui/form.js';

// Import Database Utils
import { DB } from '/shared/js/app/orders/db.js';

//// Import Custom App scripts
import { NewOrders } from '/apps/orders/js/components/queries/orders.js';
import { Component as OrdersTable } from '/apps/ship/js/components/ordersTable.js';
import { Component as OrdersTicker } from '/apps/orders/js/components/ordersTicker.js';

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
		HeaderWithHomeLink('', '/', 'Shipping', 'Ship packed orders'),
		StatusTitleBar('12', [
			//StatusTile('status-new-orders', 32, 'All'),
			StatusTile('status-new-orders', '1', 'Ice Box'),
			StatusTile('status-new-orders', 10, 'New'),
			StatusTile('status-new-orders', 5, 'Pack'),
			StatusTile('status-new-orders', 10, 'Label'),
			StatusTile('status-new-orders', 0, 'Close')
		]),
		OrdersTable,
		OrdersTicker
	],
	$type: 'div',
	id: 'app'
};

window.App = App;
