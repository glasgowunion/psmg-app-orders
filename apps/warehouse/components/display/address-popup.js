import * as Format from '/apps/orders/js/components/formaters.js';

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
		company: item.delivery.details.contact.company,
		name: Format.Name(item.delivery.details.contact.name),
		address1: item.delivery.details.address.street1,
		address2: item.delivery.details.address.street2,
		city: item.delivery.details.address.city,
		country: item.delivery.details.address.country_code,
		phone: item.delivery.details.contact.phone,
		postcode: item.delivery.details.address.postal_code
	};
}

export { OrderAddressCard };
