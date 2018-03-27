// NotFound Page : functions as a 404 page
const NotFound = {
	view() {
		return [
			m(Header, {
				title: 'Error',
				subtitle: "We couldn't find the page you were looking for"
			})
		];
	}
};

export { NotFound };
