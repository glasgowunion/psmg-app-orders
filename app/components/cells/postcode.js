var link = postcode => {
	return {
		href: 'https://www.google.co.uk/maps/place/' + postcode,
		target: '_blank'
	};
};

const mapIcon = {
	symbol: 'map-marker-alt',
	style: 'is-pulled-right'
};

const Postcode = {
	view(vn) {
		return [
			m('span', pkg.Formatters.FormatPostcode(vn.attrs.postcode)),
			m('a', link(vn.attrs.postcode), m(Icon, mapIcon))
		];
	}
};

export { Postcode };
