const Table = {
	view(vnode) {
		return m(Layout, { size: '12' }, [
			m(
				'table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth',
				[
					m('thead', [
						m('tr', vnode.attrs.headers.map(header => m('th', header)))
					]),
					m(
						'tbody',
						vnode.attrs.rows.map(row =>
							m('tr', row.cells.map(cell => m('td', cell)))
						)
					)
				]
			)
		]);
	}
};

export { Table };
