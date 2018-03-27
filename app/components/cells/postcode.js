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

// Components
import { Icon } from '/app/components/icon.js';

// Utilities
import { Postcode as Formatter } from '/app/pkg/formatters/postcode.js';

const Postcode = {
	view(vn) {
		return [
			m('span', Formatter(vn.attrs.postcode)),
			m('a', link(vn.attrs.postcode), m(Icon, mapIcon))
		];
	}
};

export { Postcode };
