// Icon : Displays a Bulma / font-awesome icon
const pre = vnode => {
	var attrs = {};

	// set style attribute
	if (vnode.attrs.style) {
		attrs.class = vnode.attrs.style;
	}

	// set tooltip attribute
	if (vnode.attrs.tooltip) {
		attrs['class'] = ' tooltip';
		attrs['data-balloon'] = ' tooltip';
		attrs['data-balloon-pos'] = 'up';
	}

	// set link attribute
	if (vnode.attrs.link) {
		const sel = `a[href=${vnode.attrs.link}]`;
	}

	return ['icon', attrs];
};

const Icon = {
	view(vnode) {
		const attrs = pre(vnode);
		const symbol = `fa-${vnode.attrs.symbol}`;
		const icon = m('span.icon', attrs, m('i.fa', { class: symbol }));

		if (vnode.attrs.link) {
			const sel = `a[href=${vnode.attrs.link}]`;
			return m(sel, { oncreate: m.route.link }, icon);
		}

		return icon;
	}
};

export { Icon };
