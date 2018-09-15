// Show a snackbar at the bottom of the screen
const Snackbar = {
	view(vn) {
		return m(
			'#snackbar.show.is-link',
			{
				onclick() {
					m.render(document.getElementById('snackbar-container'), null);
				}
			},
			vn.children
		);
	}
};

export { Snackbar };
