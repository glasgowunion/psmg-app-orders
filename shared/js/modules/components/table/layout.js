function LayoutTable(table) {
	return {
		$type: 'div',
		$cell: true,
		class: 'columns',
		$components: [
			{
				$type: 'div',
				class: 'column is-12',
				$components: [table]
			}
		]
	};
}
