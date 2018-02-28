import * as Format from '/apps/orders/js/components/formaters.js';

// Import Shared UI Components
import { LaunchModal } from '/shared/js/modules/components/modal.js';

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

function renderFullNameFieldDifferentShipperAddress(item) {
	if (item.ship_address.company) {
		return [
			renderIconLeftTooltip('fa-building', item.ship_address.company),
			renderFullNameField(item),
			renderPhone(item),
			renderEmail(item),
			{
				$type: 'span',
				class: 'icon is-link is-pulled-right',
				$components: [
					{
						$type: 'i',
						class: 'fas fa-user-plus'
					}
				],
				onclick: function() {
					LaunchModal(OrderAddressCard(item));
				}
			}
		];
	}
	return [
		renderIconLeft('fa-home'),
		renderFullNameField(item),
		renderPhone(item),
		renderEmail(item),
		{
			$type: 'span',
			class: 'icon is-link is-pulled-right',
			$components: [
				{
					$type: 'i',
					class: 'fas fa-user-plus'
				}
			],
			onclick: function() {
				LaunchModal(OrderAddressCard(item));
			}
		}
	];
}

function renderIconWithLink(link, icon) {
	return {
		$type: 'span',
		class: 'icon is-link is-pulled-right',
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		],
		onclick: function() {
			if (link) {
				window.open(link);
			}
		}
	};
}

function renderIconLeft(icon) {
	return {
		$type: 'span',
		class: 'icon',
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		]
	};
}

function renderIconLeftTooltip(icon, tip) {
	return {
		$type: 'span',
		class: 'icon tootip',
		'data-balloon': tip,
		'data-balloon-pos': 'up',
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		]
	};
}

function renderIcon(icon) {
	return {
		$type: 'span',
		class: 'icon is-pulled-right',
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		]
	};
}

function renderBlankSpan() {
	return {
		$type: 'span'
	};
}

function renderEmail(item) {
	if (item.email) {
		var link = 'mailto://' + item.email;
		return renderIconWithLink(link, 'fa-at');
	}
	return renderBlankSpan();
}

function renderPhone(item) {
	if (item.bill_address.phone) {
		var link = 'tel://' + item.bill_address.phone;
		return renderIconWithLink(link, 'fa-phone');
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
				renderIconLeftTooltip('fa-building', item.ship_address.company),
				renderFullNameField(item),
				renderPhone(item),
				renderEmail(item)
			];
		}
		return [
			renderIconLeft('fa-home'),
			renderFullNameField(item),
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
	var total = R.reduce(addQuantity, 0, skus);

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
		renderIcon('fa-tag'),
		displayTotal,
		renderIcon('fa-barcode'),
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
								renderIconWithLink(map_link, 'fa-map-marker-alt')
							]
						},
						{
							$type: 'td',
							$components: [
								{
									$type: 'button',
									class: 'button is-small',
									$text: 'Pack',
									style: 'width: 100%;'
								}
							]
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
