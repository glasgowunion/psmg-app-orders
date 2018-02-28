function OrderAddressCard(item) {
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
						$text: 'name'
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
						$text: 'content'
					}
				]
			}
		]
	};
}

function OrderSenderToAddress(item) {
	return {
		company: item.ship_address.company,
		firstname: item.ship_address.firstname,
		lastname: item.ship_address.lastname,
		address1: item.ship_address.address1,
		address2: item.ship_address.address2,
		city: item.ship_address.city,
		country: '',
		phone: item.ship_address.phone,
		postcode: item.ship_address.postcode
	};
}
