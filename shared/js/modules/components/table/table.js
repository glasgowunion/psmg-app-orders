function Table(header, body) {
	return {
		id: 'component-orders-table',
		$type: 'table',
		class: 'table is-bordered is-striped is-narrow is-hoverable is-fullwidth',
		$components: [header, body]
	};
}

export { Table };
