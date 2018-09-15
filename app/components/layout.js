const Layout = {
	view(vn) {
		return m('.columns', [
			m('.column', { class: `is-${vn.attrs.size}` }, vn.children)
		]);
	}
};

export { Layout };
