import { Header } from '/app/components/header.js';

// view : A Mithril component view
// @params vn {oject} - a Mitril virtual node
function view(vn) {
	return [
		m(Header, {
			title: 'Error',
			subtitle: "We couldn't find the page you were looking for"
		})
	];
}

// NotFound Page : functions as a 404 page
const NotFound = {
	view: view
};

export { NotFound };
