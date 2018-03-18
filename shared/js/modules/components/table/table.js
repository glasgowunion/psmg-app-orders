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

function Table(header, body) {
	return {
		id: 'component-orders-table',
		$type: 'table',
		class: 'table is-bordered is-striped is-narrow is-hoverable is-fullwidth',
		$components: [header, body]
	};
}

// Header : Create a HTML table header for the orders
// @params {[string]} - Array of header titles
function TableHeader(headers) {
	return {
		$type: 'thead',
		$components: [{ $type: 'tr', $components: headers.map(mapFunc) }]
	};
}

function mapFunc(item) {
	return { $type: 'th', $text: item };
}

function TableBody(rows) {
	return {
		id: 'orderData',
		$type: 'tbody',
		$components: rows
	};
}

function TableRow(id, data, components) {
	return {
		$type: 'tr',
		_data: item,
		id: item._id,
		$components: components
	};
}

function TableCell(components) {
	return {
		$type: 'td',
		$components: components
	};
}

function TableCellText(text) {
	return { $type: 'td', $text: text };
}

function TableCellTextWithComponent(text, component) {
	return TableCell([{ $type: 'span', $text: text }, component]);
}

export {
	LayoutTable,
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableCell,
	TableCellText,
	TableCellTextWithComponent
};
