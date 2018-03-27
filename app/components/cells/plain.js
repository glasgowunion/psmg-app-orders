// Utilities
import { ToTitleCase } from '/app/pkg/formatters/title-case.js';

const Plain = {
	view(vn) {
		return m('span', ToTitleCase(vn.attrs.text));
	}
};

export { Plain };
