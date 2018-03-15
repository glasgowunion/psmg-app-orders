//// Import Shared files
// Import CellJS Utils
import { Append } from '/shared/js/modules/cell/append.js'

// Import UI Components
import { DispearingNotification } from '/shared/js/modules/components/notification.js'
import { HeaderWithHomeLink } from '/shared/js/modules/components/header.js'
import { Help } from '/shared/js/modules/components/help.js'
import {
  StatusTile,
  StatusTitleBar,
} from '/shared/js/modules/components/tile.js'
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js'

// Import Form Builder and Form Utilities
import * as FB from '/shared/js/modules/ui/formBuilder.js'
import * as Form from '/shared/js/modules/ui/form.js'

// Import App files
// import { Fields } from '/apps/shipper/js/components/forms/CourierSettings.js';

// Import Database Utils
import { DB } from '/shared/js/app/orders/db.js'

//// Import Custom App scripts
import {
  NewOrders,
  WarehouseState,
  ViewStateCount,
  UpdateViewStateCount,
} from '/shared/js/app/orders/queries/orders.js'
import { Component as OrdersTable } from '/apps/icebox/js/components/ordersTable.js'
import { Component as OrdersTicker } from '/apps/icebox/js/components/ordersTicker.js'

function reactToChanges(db) {
  db
    .changes({ live: true, retry: true, since: 'now', include_docs: true })
    .on('change', function(change) {
      if (change.deleted) {
        // change.id holds the deleted id
        console.log(change.id)
      } else {
        // updated/inserted
        // change.doc holds the new doc
        console.log(change.doc)
        UpdateTitleState()
      }
      console.log('render.docs')
    })
    .on('error', console.log.bind(console))
}

function UpdateTitleState() {
  UpdateViewStateCount('reactive-state-icebox', 'icebox')
  UpdateViewStateCount('reactive-state-pack', 'pack')
  UpdateViewStateCount('reactive-state-ready', 'ready')
  UpdateViewStateCount('reactive-state-ship', 'ship')
  UpdateViewStateCount('reactive-state-accounts', 'accounts')
}

// Entry Point to App
var App = {
  $init: function() {
    var self = this
    WarehouseState('icebox').then(function(orders) {
      console.log(orders)
      document.getElementById('orderData')._data = orders
      document.getElementById('orderData').$update()
      reactToChanges(DB)
      UpdateTitleState()
    })
  },
  $cell: true,
  $components: [
    HeaderWithHomeLink(
      '',
      '/',
      'New Orders',
      'View New Orders from all channels',
    ),
    StatusTitleBar('12', [
      //StatusTile('status-new-orders', 32, 'All'),
      StatusTile('reactive-state-icebox', '-', 'Ice Box'),
      StatusTile('reactive-state-ready', '-', 'New'),
      StatusTile('reactive-state-pack', '-', 'Pack'),
      StatusTile('reactive-state-ship', '-', 'Label'),
      StatusTile('reactive-state-accounts', '-', 'Close'),
    ]),
    OrdersTable,
    OrdersTicker,
  ],
  $type: 'div',
  id: 'app',
}

window.App = App
