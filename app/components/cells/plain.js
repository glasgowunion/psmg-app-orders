const Plain = {
	view(vn) {
		return m('span', pkg.Formatters.ToTitleCase(vn.attrs.text));
	}
};
