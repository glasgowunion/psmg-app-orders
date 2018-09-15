const init = {
	hero: {
		title: 'Accounts',
		subtitle: 'Orders can be sent to data exchange or archived'
	},
	table: {
		headers: ['Name', 'Order', 'City', 'Warehouse', 'Actions']
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

/*
* Create Cell Objects From an order
*/

const NameCellFromOrder = order => {
	return {
		name: order.billing.contact.name ? order.billing.contact.name : 'No name',
		company: order.billing.contact.company
			? order.billing.contact.company
			: null,
		email: order.billing.contact.email ? order.billing.contact.email : null,
		phone: order.billing.contact.phone ? order.billing.contact.phone : null
	};
};

const OrderlineCellFromOrder = order => {
	return {
		number: order.number ? order.number : 'No Order Number',
		currency: CurrencyCode(order.total.currency_code),
		total: order.total.display_amount ? order.total.amount : null,
		lineItems: order.line_items ? order.line_items : []
	};
};

const CityCellFromOrder = order => {
	return {
		text: order.delivery.details.address.city
			? order.delivery.details.address.city
			: 'No City'
	};
};

const PostcodeCellFromOrder = order => {
	return {
		postcode: order.delivery.details.address.postal_code
			? order.delivery.details.address.postal_code
			: 'No Postal Code'
	};
};

// Test Data
import { Order, Orders } from '/app/test/data/order.js';

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

// Utilities
import { CurrencyCode } from '/app/pkg/formatters/currency-code.js';

const Rows = orders => {
	return orders.map(Row);
};

const Row = order => {
	return {
		cells: [
			m(Name, NameCellFromOrder(order)),
			m(Orderline, OrderlineCellFromOrder(order)),
			m(Plain, CityCellFromOrder(order)),
			m(Plain, { text: 'Paisley' }),
			m(NextAction, {
				actions: [
					m('a.dropdown-item', 'button'),
					m('hr.dropdown-divider'),
					m('a.dropdown-item', 'button2')
				]
			})
		]
	};
};

// view : A Mithril component view
// @params vn {oject} - a Mitril virtual node
function view(vn) {
	return [
		m(Header, vn.state.init.hero),
		m(WarehouseStatuses),
		m(Table, {
			headers: vn.state.init.table.headers,
			rows: Rows(Orders)
		}),
		m('#snackbar-container', '')
	];
}

const Component = {
	view: view
};

export { Component };
