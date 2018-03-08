// Import UI Components
import * as Icons from '/shared/js/modules/components/icons.js'
import { DispearingNotification } from '/shared/js/modules/components/notification.js'
import { Header } from '/shared/js/modules/components/header.js'
import { Help } from '/shared/js/modules/components/help.js'
import {
  StatusTile,
  StatusTileWithIcon,
  StatusTitleBar,
} from '/shared/js/modules/components/tile.js'
import { TwoColumnLayoutWithOffset } from '/shared/js/modules/ui/layout.js'

// Entry Point to App
var App = {
  $init: function() {},
  $cell: true,
  $components: [
    Header(
      '',
      'Paintshed management platform',
      'A place for all your apps in the warehouse',
    ),
    {
      $type: 'h2',
      $text: 'Warehouse',
 style: 'font-size:1.25rem;color:hsl(192, 17%, 99%);'
    },
    StatusTitleBar([
      StatusTileWithIcon(
        'status-new-orders',
        Icons.IconWithLink('/apps/icebox', 'fa-box', ''),
        'Ice Box',
      ),
      StatusTileWithIcon(
        'status-new-orders',
        Icons.IconWithLink('/apps/orders', 'fa-star', ''),
        'New Orders',
      ),
      StatusTileWithIcon(
        'status-new-orders',
        Icons.IconWithLink('/apps/packing', 'fa-dolly', ''),
        'Packing',
      ),
      StatusTileWithIcon(
        'status-new-orders',
        Icons.IconWithLink('/apps/shipping', 'fa-truck', ''),
        'Shipping',
      ),
      StatusTileWithIcon(
        'status-new-orders',
        Icons.IconWithLink('/apps/accounts', 'fa-credit-card', ''),
        'Accounts',
      ),
    ]),
  ],
  $type: 'div',
  id: 'app',
}

window.App = App