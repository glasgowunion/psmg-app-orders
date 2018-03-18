function TableCell(components) {
  return {
    $type: 'td',
    $components: components,
  }
}

function TableCellText(text) {
  return { $type: 'td', $text: text }
}

function TableCellTextWithComponent(text, component) {
  return TableCell([{ $type: 'span', $text: text }, component])
}

export { TableCell, TableCellText, TableCellTextWithComponent }
