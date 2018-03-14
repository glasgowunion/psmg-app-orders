// Header : Create a HTML table header for the orders
// @params {[string]} - Array of header titles
function Header(headers) {
  return {
    $type: 'thead',
    $components: [{ $type: 'tr', $components: headers.map(mapFunc) }],
  }
}

function mapFunc(item) {
  return { $type: 'th', $text: item }
}

export { Header }
