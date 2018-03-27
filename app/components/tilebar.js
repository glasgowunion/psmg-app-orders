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

import { Layout } from '/app/components/layout.js';

// Tile bar renders tiles
// to pretify the layout it renders
// a maximum of 5 tiles and adjusts the layout
// to look good for less than 5 tiles
const TileBar = {
	view: function(vn) {
		return m(Layout, { size: whatLayoutSize(vn.children.length) }, [
			m('section.info-tiles', [
				m('.tile.is-ancestor.has-text-centered', vn.children)
			])
		]);
	}
};

export { TileBar };
