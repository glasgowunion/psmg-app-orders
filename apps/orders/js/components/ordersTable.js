import * as Format from '/apps/orders/js/components/formaters.js';

import { ChangeState } from '/apps/orders/js/components/actions/changeState.js';

// Import Shared UI Components
import * as Modals from '/shared/js/modules/components/modal.js';
import * as Icons from '/shared/js/modules/components/icons.js';
import * as DropdownButton from '/shared/js/modules/components/DropdownButton.js';

let headers = ['Name', 'Order', 'City', 'Postcode', 'Actions'];

let Headers = function(item) {
	return { $type: 'th', $text: item };
};

// renderFullNameField : renders an order object into it's
// the bill payers first and last name
// @param {Oject} item - a single order / represents a table row
function renderFullNameField(item) {
	return {
		$type: 'span',
		$text: Format.Name(item.bill_address.firstname, item.bill_address.lastname)
	};
}

function renderBlankSpan() {
	return {
		$type: 'span'
	};
}

function renderFullNameFieldDifferentShipperAddress(item) {
	function launchModal() {}

	if (item.ship_address.company) {
		return [
			Icons.IconWithTooltip('fa-building', item.ship_address.company, ''),
			Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
			renderFullNameField(item),
			renderPhone(item),
			renderEmail(item),
			Modals.AttachModalOnClick(
				Icons.Icon('fa-user-plus', 'right'),
				OrderAddressCard(item)
			)
		];
	}
	return [
		Icons.Icon('fa-home', 'left'),
		renderFullNameField(item),
		Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
		renderPhone(item),
		renderEmail(item),
		Modals.AttachModalOnClick(
			Icons.Icon('fa-user-plus', 'right'),
			OrderAddressCard(item)
		)
	];
}

function renderEmail(item) {
	if (item.email) {
		var link = 'mailto://' + item.email;
		return Icons.IconWithLink(link, 'fa-at', 'right');
	}
	return renderBlankSpan();
}

function renderPhone(item) {
	if (item.bill_address.phone) {
		var link = 'tel://' + item.bill_address.phone;
		return Icons.IconWithLink(link, 'fa-phone', 'right');
	}
	return renderBlankSpan();
}

function RenderNameField(item) {
	if (
		Format.Name(item.bill_address.firstname, item.bill_address.lastname) ==
		Format.Name(item.ship_address.firstname, item.ship_address.lastname)
	) {
		if (item.ship_address.company) {
			return [
				Icons.IconWithTooltip('fa-building', item.ship_address.company, ''),
				renderFullNameField(item),
				Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
				renderPhone(item),
				renderEmail(item)
			];
		}
		return [
			Icons.Icon('fa-home', ''),
			renderFullNameField(item),
			Icons.IconWithLinkColour('', 'fa-comment', 'lightgray', 'right'),
			renderPhone(item),
			renderEmail(item)
		];
	}
	return renderFullNameFieldDifferentShipperAddress(item);
}

// Address card should be moved into its own component

function OrderAddressCard(item) {
	var FormattedAddress = OrderSenderToAddress(item);
	var title = FormattedAddress.name;
	if (FormattedAddress.company) {
		title = FormattedAddress.company;
	}
	var components = [];
	for (var key in FormattedAddress) {
		if (FormattedAddress.hasOwnProperty(key)) {
			var component = {
				$type: 'p',
				$text: key + ': ' + FormattedAddress[key]
			};
			components.push(component);
		}
	}
	return {
		$type: 'div',
		class: 'card',
		$components: [
			{
				$type: 'header',
				class: 'card-header',
				$components: [
					{
						$type: 'p',
						class: 'card-header-title',
						$text: title
					}
				]
			},
			{
				$type: 'div',
				class: 'card-content',
				$components: [
					{
						$type: 'div',
						class: 'content',
						$components: components
					}
				]
			}
		]
	};
}

function OrderSenderToAddress(item) {
	return {
		company: item.ship_address.company,
		name: Format.Name(item.ship_address.firstname, item.ship_address.lastname),
		address1: item.ship_address.address1,
		address2: item.ship_address.address2,
		city: item.ship_address.city,
		country: '',
		phone: item.ship_address.phone,
		postcode: item.ship_address.postcode
	};
}

function RenderLineItems(item) {
	var num = item.total_quantity;
	var skus = item.line_items;
	var addQuantity = function(a, e) {
		return a + e.quantity;
	};
	var total = window.R.reduce(addQuantity, 0, skus);

	var displaySKUs = {
		$type: 'span',
		class: 'is-pulled-right',
		$text: num + 'x'
	};

	var displayTotal = {
		$type: 'span',
		class: 'is-pulled-right',
		$text: total + 'x'
	};

	var displayTotalPrice = {
		$type: 'span',
		class: 'is-small tag',
		$text: '£' + item.total
	};

	return [
		{ $type: 'span', $text: item.number },
		displayTotalPrice,
		Icons.Icon('fa-tag', 'right'),
		displayTotal,
		Icons.Icon('fa-barcode', 'right'),
		displaySKUs
	];
}

var component = {
	id: 'component-orders-table',
	$type: 'table',
	class: 'table is-bordered is-striped is-narrow is-hoverable is-fullwidth',
	$components: [
		{
			$type: 'thead',
			$components: [{ $type: 'tr', $components: headers.map(Headers) }]
		},
		{
			_template: function(item) {
				var map_link =
					'https://www.google.co.uk/maps/place/' + item.ship_address.postcode;
				return {
					$type: 'tr',
					_data: item,
					id: item._id,
					$components: [
						{
							$type: 'td',
							$components: RenderNameField(item)
						},
						{
							$type: 'td',
							$components: RenderLineItems(item)
						},
						{ $type: 'td', $text: item.ship_address.city },
						{
							$type: 'td',
							$components: [
								{
									$type: 'span',
									$text: Format.Postcode(item.ship_address.postcode)
								},
								Icons.IconWithLink(map_link, 'fa-map-marker-alt', 'right')
							]
						},
						{
							$type: 'td',
							$components: [
								DropdownButton.Group('Next Action', 'right', [
									DropdownButton.Button('Pack'),
									DropdownButton.Div(),
									DropdownButton.Button('Ice Box')
								])
							],
							_ref: item._id
							// onclick: function() {
							// 	var self = this;
							// 	console.log(self._ref);
							// 	var doc = document.getElementById(self._ref);
							//
							// 	ChangeState(doc._data).then(function(res) {
							// 		if (res.ok) {
							// 			doc.remove();
							// 		}
							// 	});
							// }
						}
					]
				};
			},
			_data: [],
			$update: function() {
				this.$components = this._data.map(this._template);
			},
			id: 'orderData',
			$type: 'tbody'
		}
	]
};

function wrapper(component) {
	return {
		$type: 'div',
		$cell: true,
		class: 'columns',
		$components: [
			{
				$type: 'div',
				class: 'column is-12',
				$components: [component]
			}
		]
	};
}

var Component = wrapper(component);

export { Component };
