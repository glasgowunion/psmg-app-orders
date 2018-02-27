// Append : Appends a cell (celljs structure) to a selected dom node
// @params node {func} - a function that wraps a dom selector
// params component {Object} - a celljs object
function Append(node, component) {
	var cell = window.document.body.$cell(component);
	node().appendChild(cell);
}

export { Append };
