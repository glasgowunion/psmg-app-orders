// Utilities
import { ToTitleCase } from '/app/pkg/formatters/title-case.js';

// Components
import { Icon } from '/app/components/icon.js';

const Name = {
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
				m('span', ToTitleCase(vn.attrs.name)),
				m(Icon, {
					link: '/comment/1',
					symbol: 'comment',
					style: 'is-pulled-right lighter'
				}),
				m(Icon, {
					clickableTooltip: [vn.attrs.phone, vn.attrs.email],
					symbol: 'address-card',
					style: 'is-pulled-right'
				})
			]
		];
	}
};

export { Name };
