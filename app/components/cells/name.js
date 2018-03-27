// Utilities
import { ToTitleCase } from '/app/pkg/formatters/title-case.js';

// Components
import { Icon } from '/app/components/icon.js';
import { Snackbar } from '/app/components/snackbar.js';

const Name = {
	view(vn) {
		var self = this;
		console.log(vn);
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
					onclick() {
						m.render(document.getElementById('snackbar-container'), null);
						return m.render(
							document.getElementById('snackbar-container'),
							m(Snackbar, {}, [
								m('h2', `${vn.attrs.name} - Contact Details`),
								m('p', vn.attrs.email),
								m('p', vn.attrs.phone)
							])
						);
					},
					symbol: 'address-card',
					style: 'is-pulled-right'
				})
			]
		];
	}
};

export { Name };
