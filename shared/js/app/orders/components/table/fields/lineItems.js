import * as Icons from '/shared/js/modules/components/icons.js'

function LineItems(item) {
  var num = item.line_items.length
  var skus = item.line_items
  var addQuantity = function(a, e) {
    return a + e.quantity
  }
  var total = window.R.reduce(addQuantity, 0, skus)

  var displaySKUs = {
    $type: 'span',
    class: 'is-pulled-right',
    $text: num + 'x',
  }

  var displayTotal = {
    $type: 'span',
    class: 'is-pulled-right',
    $text: total + 'x',
  }

  var displayTotalPrice = {
    $type: 'span',
    class: 'is-small tag',
    $text: '£' + item.total.display_amount,
  }

  return [
    { $type: 'span', $text: item.number },
    displayTotalPrice,
    Icons.Icon('fa-tag', 'right'),
    displayTotal,
    Icons.Icon('fa-barcode', 'right'),
    displaySKUs,
  ]
}

export { LineItems }
