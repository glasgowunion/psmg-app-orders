// Tile : Displays a Bulma Admin Tile - 'this is a specially styled Bulma Card'
// @attrs title {vnode} - a vnode that is displayed above the subtitle
// @attrs subtitle {vnode} - a vnode that is displayed below the subtitle
const Tile = {
	view: function(vn) {
		// decide if tile contains a link
		// if it does link up to router
		if (vn.attrs.link) {
			var sel = 'a.tile.is-parent' + '[href=' + vn.attrs.link + ']';
			return m(sel, { oncreate: m.route.link }, [
				m('article.tile.is-child.box', [vn.attrs.title, vn.attrs.subtitle])
			]);
		}
		return m('.tile.is-parent', [
			m('article.tile.is-child.box', [vn.attrs.title, vn.attrs.subtitle])
		]);
	}
};

export { Tile };
