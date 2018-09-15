import { Layout } from '/app/components/layout.js';

// Header : Displays a Bulma Hero / Header
// @attrs title {string} - a title to be formatted and displayed
// attrs subtitle {string} - a subtitle to be formatted and displayed
const Header = {
	view(vn) {
		return m(Layout, { size: '12' }, [
			m('section.hero.welcome.is-small', [
				m('.hero-body', [
					m('h1.title', vn.attrs.title),
					m('h2.subtitle', vn.attrs.subtitle)
				])
			])
		]);
	}
};

export { Header };
