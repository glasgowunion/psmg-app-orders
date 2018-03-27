const NameCell = {
	view(vn) {
		var companyOrResidential = m(Icon, { symbol: 'home' });
		if (vn.attrs.company) {
			companyOrResidential = m(Icon, {
				symbol: 'building',
				tooltip: vn.attrs.company
			});
		}
		return [
			companyOrResidential,
			[
				m('span', pkg.Formatters.ToTitleCase(vn.attrs.name)),
				m('button', vn.attrs, ['Click to ', vn.children]),
				m(Icon, {
					link: '/comment/1',
					symbol: 'comment',
					style: 'is-pulled-right lighter'
				}),
				m(Icon, {
					link: '/contact/1',
					symbol: 'address-card',
					style: 'is-pulled-right'
				})
			]
		];
	}
};
