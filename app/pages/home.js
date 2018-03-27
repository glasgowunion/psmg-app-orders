const data = {
	hero: {
		title: 'Paintshed management platform (psmg)',
		subtitle: 'A place for all your apps in the warehouse'
	},
	groups: [
		{
			group: 'Warehouse',
			apps: [
				{
					link: '/test',
					name: 'Test',
					symbol: 'box'
				},
				{
					link: '/test',
					name: 'Review',
					symbol: 'star'
				},
				{
					link: '/test',
					name: 'Pack',
					symbol: 'dolly'
				},
				{
					link: '/test',
					name: 'Ship',
					symbol: 'truck'
				},
				{
					link: '/test',
					name: 'Accounts',
					symbol: 'credit-card'
				}
			]
		},
		{
			group: 'Customer Service',
			apps: [
				{
					link: '/',
					name: 'Tracking',
					symbol: 'question'
				},
				{
					link: '/',
					name: 'Customers',
					symbol: 'users'
				},
				{
					link: '/',
					name: 'Quote',
					symbol: 'clipboard-list'
				}
			]
		}
	]
};

import { Header } from '/app/components/header.js';
import { TileBar } from '/app/components/tilebar.js';
import { Tile } from '/app/components/tile.js';

// Home Page : A single page for all PS apps
const Home = {
	data: data,
	view() {
		var s = this.data;
		return [
			m(Header, data.hero),
			data.groups.map(function(children) {
				return [
					m('h2.tilebar-title', children.group),
					m(
						TileBar,
						children.apps.map(function(attrs) {
							return m(Tile, {
								link: attrs.link,
								title: m(Icon, { symbol: attrs.symbol, link: true }),
								subtitle: m('p.subtitle', attrs.name)
							});
						})
					)
				];
			})
		];
	}
};
