import { NewOrders } from '/app/js/components/queries/orders.js'
import { Component as OrdersTable } from '/app/js/components/ordersTable.js'
import { Component as OrdersTicker } from '/app/js/components/ordersTicker.js'

// Entry Point to App
var App = {
  $init: function() {
    var self = this
    NewOrders().then(function(orders) {
      document.getElementById('orderData')._data = orders
      document.getElementById('orderData').$update()
    })
  },
  $cell: true,
  $components: [OrdersTable, OrdersTicker],
  $type: 'div',
  class: 'app',
}

window.App = App
