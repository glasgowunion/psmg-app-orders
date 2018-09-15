const CurrencyCode = str => {
	switch (str) {
		case 'GBP':
			return '£';
			break;
		default:
			return 'M';
	}
};

export { CurrencyCode };
