const pre = vn => {
	var attrs = vn.attrs;

	// set style attribute
	if (vn.attrs.style) {
		attrs.class = vn.attrs.style;
	}

	// set tooltip attribute
	if (vn.attrs.tooltip) {
		attrs['class'] = ' tooltip';
		attrs['data-balloon'] = vn.attrs.tooltip;
		attrs['data-balloon-pos'] = 'up';
	}

	if (vn.attrs.onclick) {
		attrs['class'] = attrs['class'] + ' is-link';
	}

	return attrs;
};

// Icon : Displays a Bulma / font-awesome icon
const Icon = {
	view(vn) {
		const attrs = pre(vn);
		const symbol = `fa-${vn.attrs.symbol}`;
		const icon = m('span.icon', attrs, m('i.fa', { class: symbol }));

		if (vn.attrs.link) {
			const sel = `a[href=${vn.attrs.link}]`;
			return m(sel, { oncreate: m.route.link }, icon);
		}

		return icon;
	}
};

export { Icon };
