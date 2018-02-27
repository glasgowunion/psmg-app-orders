import * as Format from '/apps/orders/js/components/formaters.js';

let headers = ['Name', 'Number', 'City', 'Postcode', 'Store', 'Actions'];

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
	return [
		renderFullNameField(item),
		renderPhone(item),
		renderEmail(item),
		{
			$type: 'span',
			class: 'icon is-pulled-right',
			$components: [
				{
					$type: 'i',
					class: 'fas fa-user-plus'
				}
			]
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
	console.log(item);
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
		return [renderFullNameField(item), renderPhone(item), renderEmail(item)];
	}
	return renderFullNameFieldDifferentShipperAddress(item);
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
				return {
					$type: 'tr',
					$components: [
						{
							$type: 'td',
							$components: RenderNameField(item)
						},
						{ $type: 'td', $text: item.number },
						{ $type: 'td', $text: item.ship_address.city },
						{
							$type: 'td',
							$text: Format.Postcode(item.ship_address.postcode)
						},
						{ $type: 'td' },
						{
							$type: 'td',
							$components: [
								{ $type: 'i', class: 'far fa-comment' },
								{ $type: 'i', class: 'fas fa-phone' },
								{ $type: 'i', class: 'fas fa-at' }
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
