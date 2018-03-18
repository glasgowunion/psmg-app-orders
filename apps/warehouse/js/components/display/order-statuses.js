import {
	StatusTile,
	StatusTitleBar
} from '/shared/js/modules/components/tile.js';

// OrderStatuses : Creates a Standard Titlebar that can be used for all views
function OrderStatuses() {
	return StatusTitleBar('12', [
		//StatusTile('status-new-orders', 32, 'All'),
		StatusTile('reactive-state-icebox', '-', 'Ice Box'),
		StatusTile('reactive-state-ready', '-', 'New'),
		StatusTile('reactive-state-pack', '-', 'Pack'),
		StatusTile('reactive-state-ship', '-', 'Label'),
		StatusTile('reactive-state-accounts', '-', 'Close')
	]);
}

export { OrderStatuses };
