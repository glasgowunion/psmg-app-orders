const Test = {
	view() {
		return [
			m(Header, {
				title: 'Test Page',
				subtitle: 'To build test components in'
			}),
			m(Table, {
				headers: ['Name', 'Order', 'City', 'Postcode', 'Actions'],
				rows: [
					{
						cells: [
							m(
								NameCell,
								{ name: 'Jamie Laux', company: 'Playgirls Ltd.' },
								m('p', 'help')
							),
							m(OrderlineCell, {
								number: 'Web-12345-TPUK',
								currency: '£',
								total: '10.00',
								lineItems: [{ quantity: 2 }, { quantity: 4 }]
							}),
							m(PlainCell, { text: 'glasgow' }),
							m(PostcodeCell, { postcode: 'g13lb' }),
							m(NextActionCell, {
								actions: [
									m('a.dropdown-item', 'button'),
									m('hr.dropdown-divider'),
									m('a.dropdown-item', 'button2')
								]
							})
						]
					},
					{
						cells: [m(NameCell, { name: 'iony Hund' })]
					}
				]
			})
		];
	}
};

export { Test };
