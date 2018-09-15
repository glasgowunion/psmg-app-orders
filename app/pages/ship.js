const init = {
	hero: {
		title: 'Ship',
		subtitle: 'Orders that are ready to be shipped'
	},
	table: {
		headers: ['Name', 'Order', 'Package', 'Ship', 'Actions']
	}
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

// Test Data
import { Order, Orders } from '/app/test/data/order.js';

// Components
import { Header } from '/app/components/header.js';
import { Icon } from '/app/components/icon.js';

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
			m('.field.is-grouped.is-grouped-multiline.has-text-centered', [
				m(
					'.control',
					m('.tags.has-addons', [m('.tag', 'weight'), m('.tag.is-dark', '4Kg')])
				),
				m(
					'.control',
					m('.tags.has-addons', [m('.tag', 'boxes'), m('.tag.is-dark', '4')])
				),
				m(
					'.control',
					m(
						'.tag',
						m(Icon, {
							symbol: 'sticky-note',
							style: 'is-small',
							tooltip: 'please leave outside the door'
						})
					)
				)
			]),

			m('p', 'No labels yet'),
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

/*
* Ship Component
*/

function oninit(vn) {}

function view(vn) {
	return [
		m(Header, init.hero),
		m(WarehouseStatuses),
		m(Table, {
			headers: init.table.headers,
			rows: Rows(Orders)
		}),
		m('#snackbar-container', '')
	];
}

export const Component = {
	onint: oninit,
	view: view
};
