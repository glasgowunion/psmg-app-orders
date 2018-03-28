const preload = {
	hero: {
		title: 'Review',
		subtitle: 'Orders that are ready to review and process'
	},
	table: {
		headers: ['Name', 'Order', 'City', 'Postcode', 'Actions']
	},
	tiles: [
		{
			link: '/',
			name: 'Test',
			symbol: 'box'
		},
		{
			link: '/test',
			name: 'Ready',
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
};

// Components
import { Header } from '/app/components/header.js';

// Table amd Cell Components
import { Table } from '/app/components/table.js';
import { NextAction } from '/app/components/cells/next-action.js';
import { Plain } from '/app/components/cells/plain.js';
import { Name } from '/app/components/cells/name.js';
import { Orderline } from '/app/components/cells/orderline.js';
import { Postcode } from '/app/components/cells/postcode.js';
import { Snackbar } from '/app/components/snackbar.js';

// Component Collections
import { WarehouseStatuses } from '/app/components/collections/warehouse-statuses.js';

const Ready = {
	data: preload,
	view() {
		var data = this.data;
		return [
			m(Header, data.hero),
			m(WarehouseStatuses),
			m(Table, {
				headers: data.table.headers,
				rows: [
					{
						cells: [
							m(Name, {
								name: 'Jamie Laux',
								company: 'Playgirls Ltd.',
								email: 'jamie@bleeppurple.com',
								phone: '0142435 252'
							}),
							m(Orderline, {
								number: 'Web-12345-TPUK',
								currency: '£',
								total: '10.00',
								lineItems: [{ quantity: 2 }, { quantity: 4 }]
							}),
							m(Plain, { text: 'glasgow' }),
							m(Postcode, { postcode: 'g13lb' }),
							m(NextAction, {
								actions: [
									m('a.dropdown-item', 'button'),
									m('hr.dropdown-divider'),
									m('a.dropdown-item', 'button2')
								]
							})
						]
					},
					{
						cells: [
							m(Name, {
								name: 'Jamie Laux',
								company: 'Playgirls Ltd.',
								email: 'jamie@bleeppurple.com',
								phone: '0142435 252'
							}),
							m(Orderline, {
								number: 'Web-12345-TPUK',
								currency: '£',
								total: '10.00',
								lineItems: [{ quantity: 2 }, { quantity: 4 }]
							}),
							m(Plain, { text: 'glasgow' }),
							m(Postcode, { postcode: 'g13lb' }),
							m(NextAction, {
								actions: [
									m('a.dropdown-item', 'button'),
									m('hr.dropdown-divider'),
									m('a.dropdown-item', 'button2')
								]
							})
						]
					}
				]
			}),
			m('#snackbar-container', '')
		];
	}
};

export { Ready };
