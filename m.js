const Layout = {
	view: function(vnode) {
		return m('.columns', [
			m('.column', { class: 'is-' + vnode.attrs.size }, vnode.children)
		]);
	}
};

const Icon = {
	view: function(vnode) {
		var style = 'fa-' + vnode.attrs.symbol;
		if (vnode.attrs.link) {
			style + ' is-link';
		}
		return m('span.icon', m('i.fa', { class: style }));
	}
};

const Header = {
	view: function(vnode) {
		return m(Layout, { size: '12' }, [
			m('section.hero.welcome.is-small', [
				m('.hero-body', [
					m('h1.title', vnode.attrs.title),
					m('h2.subtitle', vnode.attrs.subtitle)
				])
			])
		]);
	}
};

const Tile = {
	view: function(vnode) {
		return m('.tile.is-parent', [
			m('article.tile.is-child.box', [vnode.attrs.title, vnode.attrs.subtitle])
		]);
	}
};

function whatLayoutSize(len) {
	var layouts = [
		'12',
		'one-fifths',
		'two-fifths',
		'three-fifths',
		'four-fifths'
	];
	if (len < 0 || len > 5) {
		return layouts[0];
	}
	return layouts[len];
}

// Tile bar renders tiles
// to pretify the layout it renders
// a maximum of 5 tiles and adjusts the layout
// to look good for less than 5 tiles
const TileBar = {
	view: function(vnode) {
		return m(Layout, { size: whatLayoutSize(vnode.children.length) }, [
			m('section.info-tiles', [
				m('.tile.is-ancestor.has-text-centered', vnode.children)
			])
		]);
	}
};

m.render(document.getElementById('app'), [
	m(Header, {
		title: 'Paintshed management platform',
		subtitle: 'A place for all your apps in the warehouse'
	}),
	m(TileBar, [
		m(Tile, {
			title: m(Icon, { symbol: 'box', link: true }),
			subtitle: m('p.subtitle', 'Ice Box')
		}),
		m(Tile, {
			title: m(Icon, { symbol: 'star', link: true }),
			subtitle: m('p.subtitle', 'Review')
		}),
		m(Tile, {
			title: m(Icon, { symbol: 'dolly', link: true }),
			subtitle: m('p.subtitle', 'Pack')
		}),
		m(Tile, {
			title: m(Icon, { symbol: 'truck', link: true }),
			subtitle: m('p.subtitle', 'Ship')
		}),
		m(Tile, {
			title: m(Icon, { symbol: 'credit-card', link: true }),
			subtitle: m('p.subtitle', 'Accounts')
		})
	])
]);
