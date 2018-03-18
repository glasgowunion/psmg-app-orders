//// Import Shared files
// Import CellJS Utils
import { Append } from '/shared/js/modules/cell/append.js';

// Import UI Components
import { DispearingNotification } from '/shared/js/modules/components/notification.js';
import { HeaderWithHomeLink } from '/shared/js/modules/components/header.js';
import { Help } from '/shared/js/modules/components/help.js';
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js';

// Import Database Utils
import { DB } from '/apps/warehouse/js/state/db.js';

// Import Custom App scripts
import {
	//	NewOrders,
	WarehouseState
	//	ViewStateCount,
	//	UpdateViewStateCount
} from '/apps/warehouse/js/state/queries/orders.js';

// Import Warehouse Components
import { OrderStatuses } from '/apps/warehouse/js/components/display/order-statuses.js';

// Import Components For Pack App
import { Component as OrdersTable } from '/apps/pack/js/components/ordersTable.js';

// Entry Point to App
var App = {
	$init: function() {
		var self = this;
		WarehouseState(DB, 'pack').then(function(orders) {
			document.getElementById('orderData')._data = orders;
			document.getElementById('orderData').$update();
			reactToChanges(DB);
			UpdateTitleState();
		});
	},
	$cell: true,
	$components: [
		HeaderWithHomeLink(
			'',
			'/',
			'New Orders',
			'View New Orders from all channels'
		),
		OrderStatuses(),
		OrdersTable,
		OrdersTicker
	],
	$type: 'div',
	id: 'app'
};

window.App = App;
