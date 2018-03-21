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

const Table = {
	view: function(vnode) {
		return m(Layout, { size: '12' }, [
			m(
				'table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth',
				[
					m('thead', [
						m(
							'tr',
							vnode.attrs.headers.map(function(header) {
								return m('th', header);
							})
						)
					]),
					m(
						'tbody',
						vnode.attrs.rows.map(function(row) {
							console.log(row);
							return m(
								'tr',
								row.cells.map(function(cell) {
									return m('td', cell);
								})
							);
						})
					)
				]
			)
		]);
	}
};

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

// NotFound Page : functions as a 404 page
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

Pages.Test = {
	view: function() {
		return [
			m(Header, {
				title: 'Test Page',
				subtitle: 'To build test components in'
			}),
			m(Table, {
				headers: ['header1', 'header2', 'header3'],
				rows: [
					{
						cells: [m('h1', 'cell1'), m('h2', 'cell3'), m('h3', 'cell3')]
					},
					{
						cells: [m('h4', 'cell4'), m('h5', 'cell5'), m('h6', 'cell6')]
					}
				]
			})
		];
	}
};

var Home = {
	hero: {
		title: 'Paintshed management platform (psmg)',
		subtitle: 'A place for all your apps in the warehouse'
	},
	groups: [
		{
			group: 'Warehouse',
			apps: [
				{
					link: '/test',
					name: 'Ice Box',
					symbol: 'box'
				},
				{
					link: '/test',
					name: 'Review',
					symbol: 'star'
				},
				{
					link: '/test',
					name: 'Pack',
					symbol: 'dolly'
				},
				{
					link: '/test',
					name: 'Ship',
					symbol: 'truck'
				},
				{
					link: '/test',
					name: 'Accounts',
					symbol: 'credit-card'
				}
			]
		},
		{
			group: 'Customer Service',
			apps: [
				{
					link: '/',
					name: 'Tracking',
					symbol: 'question'
				},
				{
					link: '/',
					name: 'Customers',
					symbol: 'users'
				},
				{
					link: '/',
					name: 'Quote',
					symbol: 'clipboard-list'
				}
			]
		}
	]
};

// Home Page : A single page for all PS apps
Pages.Home = {
	s: Home,
	view: function() {
		var s = this.s;
		return [
			m(Header, s.hero),
			s.groups.map(function(ss) {
				return [
					m('h2.tilebar-title', ss.group),
					m(
						TileBar,
						ss.apps.map(function(sss) {
							return m(Tile, {
								link: sss.link,
								title: m(Icon, { symbol: sss.symbol, link: true }),
								subtitle: m('p.subtitle', sss.name)
							});
						})
					)
				];
			})
		];
	}
};

// Routes :
m.route(document.getElementById('app'), '/', {
	'/': Pages.Home,
	'/test': Pages.Test,
	'/:any...': Pages.NotFound
});
