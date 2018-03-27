// selector for Bulma table
// placed here for readability
const sel =
	'table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth';

import { Layout } from '/app/components/layout.js';

const Table = {
	view(vn) {
		var rows = vn.attrs.rows;
		var headers = vn.attrs.headers;
		return m(Layout, { size: '12' }, [
			m(sel, [
				m('thead', [m('tr', headers.map(header => m('th', header)))]),
				m('tbody', rows.map(r => m('tr', r.cells.map(cell => m('td', cell)))))
			])
		]);
	}
};

export { Table };
