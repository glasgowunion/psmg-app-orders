// Import Database Utils
import { DB } from '/apps/warehouse/js/state/db.js';

// Import Custom App scripts
import { WarehouseState } from '/apps/warehouse/js/state/queries/orders.js';

// Import Warehouse Components
import { OrderStatuses } from '/apps/warehouse/js/components/display/order-statuses.js';

// Import Components For Pack App
import { Component as OrdersTable } from '/apps/warehouse/pack/js/components/table.js';
import { HeaderWithHomeLink } from '/shared/js/modules/components/header.js';

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
		OrdersTable
		//OrdersTicker
	],
	$type: 'div',
	id: 'app'
};

window.App = App;
