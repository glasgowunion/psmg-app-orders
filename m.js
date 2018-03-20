/*
* Layouts
*/

// Main Bulma Layout
const Layout = {
	view: function(vnode) {
		return m('.columns', [
			m('.column', { class: 'is-' + vnode.attrs.size }, vnode.children)
		]);
	}
};

/*
* Bulma Components
*/

// Icon : Displays a Bulma / font-awesome icon
const Icon = {
	view: function(vnode) {
		var style = 'fa-' + vnode.attrs.symbol;
		if (vnode.attrs.link) {
			style + ' is-link';
		}
		return m('span.icon', m('i.fa', { class: style }));
	}
};

// Header : Displays a Bulma Hero / Header
// @attrs title {string} - a title to be formatted and displayed
// attrs subtitle {string} - a subtitle to be formatted and displayed
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

const Table = {};

// Tile : Displays a Bulma Admin Tile - 'this is a specially styled Bulma Card'
// @attrs title {vnode} - a vnode that is displayed above the subtitle
// @attrs subtitle {vnode} - a vnode that is displayed below the subtitle
const Tile = {
	view: function(vnode) {
		// decide if tile contains a link
		// if it does link up to router
		if (vnode.attrs.link) {
			console.log(vnode);
			var sel = 'a.tile.is-parent' + '[href=' + vnode.attrs.link + ']';
			return m(sel, { oncreate: m.route.link }, [
				m('article.tile.is-child.box', [
					vnode.attrs.title,
					vnode.attrs.subtitle
				])
			]);
		}
		return m('.tile.is-parent', [
			m('article.tile.is-child.box', [vnode.attrs.title, vnode.attrs.subtitle])
		]);
	}
};

// whatLayoutSize : decides the size of the layout dependant on ...
// @params len {integer} - the count of the number of tiles
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

/*
* Pages
*/

var Pages = {};

Pages.NotFound = {
	view: function() {
		return [
			m(Header, {
				title: 'Error',
				subtitle: "We couldn't find the page you were looking for"
			})
		];
	}
};

Pages.Home = {
	view: function() {
		return [
			m(Header, {
				title: 'Paintshed management platform',
				subtitle: 'A place for all your apps in the warehouse'
			}),
			m('h2.tilebar-title', 'Warehouse'),
			m(TileBar, [
				m(Tile, {
					link: '/',
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
			]),
			m('h2.tilebar-title', 'Customer Service'),
			m(TileBar, [
				m(Tile, {
					title: m(Icon, { symbol: 'question', link: true }),
					subtitle: m('p.subtitle', 'Tracking')
				}),
				m(Tile, {
					title: m(Icon, { symbol: 'users', link: true }),
					subtitle: m('p.subtitle', 'Customers')
				}),
				m(Tile, {
					title: m(Icon, { symbol: 'clipboard-list', link: true }),
					subtitle: m('p.subtitle', 'Quote')
				})
			])
		];
	}
};

m.route(document.getElementById('app'), '/', {
	'/': Pages.Home,
	'/:any...': Pages.NotFound
});
