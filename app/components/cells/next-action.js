const sel = 'div.dropdown.is-hoverable.is-pulled-right';

const NextAction = {
	view(vn) {
		return m(
			sel,
			m(
				'div.dropdown-trigger',
				m(
					'button.button',
					{
						'aria-haspopup': 'true',
						'aria-controls': 'dropdown-menu'
					},
					[
						m('span', 'Next Action'),
						m(Icon, { symbol: 'angle-down', style: 'is-small' })
					]
				)
			),
			m(
				'div.dropdown-menu',
				{ role: 'menu' },
				m('div.dropdown-content', vn.attrs.actions)
			)
		);
	}
};

export { NextAction };
