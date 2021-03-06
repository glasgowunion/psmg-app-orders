const init = {
	hero: {
		title: 'Paintshed management platform (psmg)',
		subtitle: 'A place for all your apps in the warehouse'
	},
	groups: [
		{
			group: 'Warehouse',
			apps: [
				{
					link: '/icebox',
					name: 'Icebox',
					symbol: 'box'
				},
				{
					link: '/ready',
					name: 'Ready',
					symbol: 'star'
				},
				{
					link: '/pack',
					name: 'Pack',
					symbol: 'dolly'
				},
				{
					link: '/ship',
					name: 'Ship',
					symbol: 'truck'
				},
				{
					link: '/accounts',
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
import { Icon } from '/app/components/icon.js';

// view : A Mithril component view
// @params vn {oject} - a Mitril virtual node
function view(vn) {
	return [
		m(Header, init.hero),
		init.groups.map(function(children) {
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

// Home Page : A single page for all PS apps
const Component = {
	view: view
};

export { Component };
