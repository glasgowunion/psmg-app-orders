const init = {
	hero: {
		title: 'Pack',
		subtitle: 'Orders that are ready to be boxed'
	},
	table: {
		headers: ['Name', 'Order', 'Pack', 'Actions']
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
			m('.field-body', [
				m(
					'.field',
					m('p.control.is-expanded.has-icons-left', [
						m('input.input', { type: 'number', placeholder: 'Weight' }),
						m(Icon, { class: 'is-small is-left', symbol: 'weight' })
					])
				),
				m(
					'.field',
					m('p.control.is-expanded.has-icons-left', [
						m('input.input', { type: 'number', placeholder: 'Boxes' }),
						m(Icon, { style: 'is-small is-left', symbol: 'boxes' })
					])
				),
				m(
					'p.control',
					m(Icon, {
						button: true,
						symbol: 'check',
						style: 'is-small',
						onclick(e) {
							console.log(this.button);
							window
								.$(this)
								.parent()
								.parent()
								.parent()
								.parent()
								.addClass('is-primary')
								.find('input')
								.attr('disabled', 'disabled');
							//.css('background', 'red');
						}
					})
				)
			]),
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

const Pack = {
	oninit(vn) {
		this.init = init;
		console.log(Orders);
		console.log(Rows(Orders));
	},
	view(vn) {
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
};

export { Pack };
