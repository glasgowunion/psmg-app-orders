// Import Custom App scripts
import {
	NewOrders,
	WarehouseState,
	ViewStateCount,
	UpdateViewStateCount
} from '/apps/warehouse/js/state/queries/orders.js';

// UpdateOrderStatuses : Updates UI components with Order Status count
function UpdateOrderStatuses() {
	UpdateViewStateCount('reactive-state-icebox', 'icebox');
	UpdateViewStateCount('reactive-state-pack', 'pack');
	UpdateViewStateCount('reactive-state-ready', 'ready');
	UpdateViewStateCount('reactive-state-ship', 'ship');
	UpdateViewStateCount('reactive-state-accounts', 'accounts');
}
