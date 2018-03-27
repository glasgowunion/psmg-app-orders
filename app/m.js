/*
* Packages
* Packages are intended to provide behaviours to the application
* Although they are used for creating object instances they aren't
* used for managing state
*/
var pkg = {};

/*
* Package | Formaters
* This Package Beautifies the data (mainly strings)
* So they look better to the user
*
* @method
* ToTitleCase : Converts a string into its title case equivalent - http://individed.com/code/to-title-case/
*
* @params str {string} - string to convert to title case
*
* @returns {string}
*
* @method
* FormatPostcode : Takes a Postcode and beautifys it
* 'Uppercase and split into the first 3 digits and then the rest'
*
* @params str {string} a postcode 6-7 chars long
*
* @returns {string}
*/

pkg.Formatters = {
	ToTitleCase: function(str) {
		var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

		return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(
			match,
			index,
			title
		) {
			if (
				index > 0 &&
				index + match.length !== title.length &&
				match.search(smallWords) > -1 &&
				title.charAt(index - 2) !== ':' &&
				(title.charAt(index + match.length) !== '-' ||
					title.charAt(index - 1) === '-') &&
				title.charAt(index - 1).search(/[^\s-]/) < 0
			) {
				return match.toLowerCase();
			}

			if (match.substr(1).search(/[A-Z]|\../) > -1) {
				return match;
			}

			return match.charAt(0).toUpperCase() + match.substr(1);
		});
	},

	FormatPostcode: function(str) {
		return str
			.replace(/\s/g, '')
			.toUpperCase()
			.replace(/(.{3})/, '$1 ');
	}
};

// App related namespaces
var App = {};
App.Pages = {};
App.PreLoad = {};
App.DB = {};

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
		var attrs = {};
		attrs.class = '';
		var style = 'fa-' + vnode.attrs.symbol;
		if (vnode.attrs.style) {
			attrs.class = vnode.attrs.style;
		}

		if (vnode.attrs.tooltip) {
			attrs.class = ' tooltip';
			attrs['data-balloon'] = vnode.attrs.tooltip;
			attrs['data-balloon-pos'] = 'up';
		}

		var icon = m('span.icon', attrs, m('i.fa', { class: style }));

		if (vnode.attrs.link) {
			attrs.class = attrs.class + ' is-link';
			var sel = 'a' + '[href=' + vnode.attrs.link + ']';
			return m(sel, { oncreate: m.route.link }, icon);
		}
		return icon;
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

// OrderlineCell : Renders an Orderline Cell in a Table cell
// @attrs number {string} - Order Number
// @attrs currency {string} - currency
// @attrs total {string} - order total
// @attrs lineItems {[Object]} - array of line item objects
const OrderlineCell = {
	addSKUs: function(a, e) {
		return a + e.quantity;
	},
	totalSKUs: function(skus) {
		return window.R.reduce(this.addSKUs, 0, skus);
	},
	view: function(vnode) {
		return [
			m('span', vnode.attrs.number),
			m('span.is-small.tag', vnode.attrs.currency + vnode.attrs.total),
			m(Icon, { symbol: 'tag', style: 'is-pulled-right' }),
			m('span.is-pulled-right', this.totalSKUs(vnode.attrs.lineItems) + 'x'),
			m(Icon, { symbol: 'barcode', style: 'is-pulled-right' }),
			m('span.is-pulled-right', vnode.attrs.lineItems.length + 'x')
		];
	}
};

const NameCell = {
	view: function(vnode) {
		var companyOrResidential = m(Icon, { symbol: 'home' });
		if (vnode.attrs.company) {
			companyOrResidential = m(Icon, {
				symbol: 'building',
				tooltip: vnode.attrs.company
			});
		}
		return [
			companyOrResidential,
			[
				m('span', pkg.Formatters.ToTitleCase(vnode.attrs.name)),
				m('button', vnode.attrs, ['Click to ', vnode.children]),
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

const NextActionCell = {
	view: function(vnode) {
		return m(
			'div.dropdown.is-hoverable.is-pulled-right',
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
				m('div.dropdown-content', vnode.attrs.actions)
			)
		);
	}
};

const PlainCell = {
	view: function(vnode) {
		return m('span', pkg.Formatters.ToTitleCase(vnode.attrs.text));
	}
};

const PostcodeCell = {
	view: function(vnode) {
		var map_link =
			'https://www.google.co.uk/maps/place/' + vnode.attrs.postcode;
		return [
			m('span', pkg.Formatters.FormatPostcode(vnode.attrs.postcode)),
			m(
				'a',
				{
					target: '_blank',
					href: map_link
				},
				m(Icon, {
					symbol: 'map-marker-alt',
					style: 'is-pulled-right'
				})
			)
		];
	}
};

/*
* Pages
*/

// NotFound Page : functions as a 404 page
App.Pages.NotFound = {
	view: function() {
		return [
			m(Header, {
				title: 'Error',
				subtitle: "We couldn't find the page you were looking for"
			})
		];
	}
};

App.Pages.Test = {
	view: function() {
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

App.PreLoad.Home = {
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
					name: 'Test',
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
App.Pages.Home = {
	s: App.PreLoad.Home,
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
	'/': App.Pages.Home,
	'/test': App.Pages.Test,
	'/:any...': App.Pages.NotFound
});
