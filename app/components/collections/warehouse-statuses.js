const preload = {
	tiles: [
		{
			link: '/',
			name: '-',
			symbol: 'box'
		},
		{
			link: '/ready',
			name: '-',
			symbol: 'star'
		},
		{
			link: '/pack',
			name: '-',
			symbol: 'dolly'
		},
		{
			link: '/test',
			name: '-',
			symbol: 'truck'
		},
		{
			link: '/test',
			name: '-',
			symbol: 'credit-card'
		}
	]
};

import { TileBar } from '/app/components/tilebar.js';
import { Tile } from '/app/components/tile.js';
import { Icon } from '/app/components/icon.js';

const WarehouseStatuses = {
	data: preload,
	view(vn) {
		return m(
			TileBar,
			vn.state.data.tiles.map(function(attrs) {
				return m(Tile, {
					link: attrs.link,
					title: m(Icon, { symbol: attrs.symbol, link: true }),
					subtitle: m('p.subtitle.has-text-weight-semibold', attrs.name)
				});
			})
		);
	}
};

export { WarehouseStatuses };
