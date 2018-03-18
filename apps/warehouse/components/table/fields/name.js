// Import Shared UI Components
import * as Modals from '/shared/js/modules/components/modal.js'
import * as Icons from '/shared/js/modules/components/icons.js'
import * as Format from '/apps/orders/js/components/formaters.js'

// Import Order Modals
import { OrderAddressCard } from '/shared/js/app/orders/components/table/modals/orderAddress.js'

// renderFullNameField : renders an order object into it's
// the bill payers first and last name
// @param {Oject} item - a single order / represents a table row
function renderFullNameField(item) {
  return {
    $type: 'span',
    $text: Format.Name(item.billing.contact.name),
  }
}

function renderFullNameFieldDifferentShipperAddress(item) {
  function launchModal() {}

  if (item.delivery.details.contact.company) {
    return [
      Icons.IconWithTooltip(
        'fa-building',
        item.delivery.details.contact.company,
        '',
      ),
      Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
      renderFullNameField(item),
      renderPhone(item),
      renderEmail(item),
      Modals.AttachModalOnClick(
        Icons.Icon('fa-user-plus', 'right'),
        OrderAddressCard(item),
      ),
    ]
  }
  return [
    Icons.Icon('fa-home', 'left'),
    renderFullNameField(item),
    Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
    renderPhone(item),
    renderEmail(item),
    Modals.AttachModalOnClick(
      Icons.Icon('fa-user-plus', 'right'),
      OrderAddressCard(item),
    ),
  ]
}

function renderEmail(item) {
  if (item.billing.contact.email) {
    var link = 'mailto://' + item.billing.contact.email
    return Icons.IconWithLink(link, 'fa-at', 'right')
  }
  return renderBlankSpan()
}

function renderPhone(item) {
  if (item.billing.contact.phone) {
    var link = 'tel://' + item.billing.contact.phone
    return Icons.IconWithLink(link, 'fa-phone', 'right')
  }
  return renderBlankSpan()
}

function Name(item) {
  if (
    Format.Name(item.billing.contact.name) ==
    Format.Name(item.delivery.details.contact.name)
  ) {
    if (item.delivery.details.contact.company) {
      return [
        Icons.IconWithTooltip(
          'fa-building',
          item.delivery.details.contact.company,
          '',
        ),
        renderFullNameField(item),
        Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
        renderPhone(item),
        renderEmail(item),
      ]
    }
    return [
      Icons.Icon('fa-home', ''),
      renderFullNameField(item),
      Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
      renderPhone(item),
      renderEmail(item),
    ]
  }
  return renderFullNameFieldDifferentShipperAddress(item)
}

export { Name }
