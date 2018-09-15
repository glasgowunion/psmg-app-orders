// Components
import { Icon } from '/app/components/icon.js';

const Orderline = {
	addSKUs(a, e) {
		return a + e.quantity;
	},
	totalSKUs(skus) {
		return window.R.reduce(this.addSKUs, 0, skus);
	},
	view(vn) {
		return [
			m('span', vn.attrs.number),
			m('span.is-small.tag', vn.attrs.currency + vn.attrs.total),
			m(Icon, { symbol: 'tag', style: 'is-pulled-right' }),
			m('span.is-pulled-right', this.totalSKUs(vn.attrs.lineItems) + 'x'),
			m(Icon, { symbol: 'barcode', style: 'is-pulled-right' }),
			m('span.is-pulled-right', vn.attrs.lineItems.length + 'x')
		];
	}
};

export { Orderline };
