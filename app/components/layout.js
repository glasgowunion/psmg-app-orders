const Layout = {
	view(vnode) {
		return m('.columns', [
			m('.column', { class: `is-${vnode.attrs.size}` }, vnode.children)
		]);
	}
};
