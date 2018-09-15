const Order = {
	_id: '00c7197c-ac7f-4271-b09d-af1cd3d98b64',
	channel: 'WEB_UK',
	state: 'icebox',
	status: 'NEW',
	ref: '',
	number: 'Web-25182-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 115.51,
			display_amount: '115.51',
			base_amount: {
				base: 100,
				amount: '11551'
			}
		},
		details: null,
		cart_id: 'REF-28325TPUK',
		transaction_id: '',
		created_at: 1520709756
	},
	delivery: {
		note: 'Please leave in front of garage ',
		details: {
			contact: {
				name: 'Colin Heath',
				company: 'CSH Property Services',
				phone: '07979530786',
				email: 'rosheath1@hotmail.co.uk'
			},
			address: {
				country_code: 'GBR',
				type: 'BUSINESS',
				street1: 'Jewell Cottage ',
				street2: 'Bradley',
				city: 'Alresford',
				state: 'Hants',
				postal_code: 'So24 9ry',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'Colin Heath',
			company: 'CSH Property Services',
			phone: '07979530786',
			email: 'rosheath1@hotmail.co.uk'
		},
		address: {
			country_code: 'GBR',
			type: 'BUSINESS',
			street1: 'Jewell Cottage ',
			street2: 'Bradley',
			city: 'Alresford',
			state: 'Hants',
			postal_code: 'So24 9ry',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '110210100550250',
			name: 'Johnstones Aqua Water Based Undercoat White 2.5lt',
			attribute: {
				colour: '',
				literage: '2.5'
			},
			price: {
				currency_code: 'GBP',
				amount: 17.04,
				display_amount: '17.04',
				base_amount: {
					base: 100,
					amount: '1704'
				}
			},
			weight: {
				value: 2.5,
				unit: 'KG'
			},
			quantity: 2,
			total: {
				currency_code: 'GBP',
				amount: 40.9,
				display_amount: '40.90',
				base_amount: {
					base: 100,
					amount: '4090'
				}
			}
		},
		{
			sku: '080310100550500',
			name: 'Johnstones Ultra High Opacity Matt White 5L',
			attribute: {
				colour: '',
				literage: '5'
			},
			price: {
				currency_code: 'GBP',
				amount: 20.13,
				display_amount: '20.13',
				base_amount: {
					base: 100,
					amount: '2012'
				}
			},
			weight: {
				value: 5,
				unit: 'KG'
			},
			quantity: 2,
			total: {
				currency_code: 'GBP',
				amount: 48.31,
				display_amount: '48.31',
				base_amount: {
					base: 100,
					amount: '4831'
				}
			}
		},
		{
			sku: '690100100001209',
			name: 'Ciret Polythene Dust Sheet 12 x 9ft Triple Pack 3PK',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 1.92,
				display_amount: '1.92',
				base_amount: {
					base: 100,
					amount: '191'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 2,
			total: {
				currency_code: 'GBP',
				amount: 4.61,
				display_amount: '4.61',
				base_amount: {
					base: 100,
					amount: '461'
				}
			}
		},
		{
			sku: '690200200020012',
			name: 'Rodo Protector Dust Sheet 12 x 9ft',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 9.04,
				display_amount: '9.04',
				base_amount: {
					base: 100,
					amount: '903'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 2,
			total: {
				currency_code: 'GBP',
				amount: 21.7,
				display_amount: '21.70',
				base_amount: {
					base: 100,
					amount: '2170'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 115.51,
		display_amount: '115.51',
		base_amount: {
			base: 100,
			amount: '11551'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 19.25,
		display_amount: '19.25',
		base_amount: {
			base: 100,
			amount: '1925'
		}
	},
	created_at: 1520707887,
	completed_at: -62135596800,
	_rev: '4-76f912e02f5b408483eb861f67d95a6e'
};

const order2 = {
	_id: '0a1c107b-b4ab-4063-b3c5-8bb2e1c7f1d9',
	channel: 'WEB_UK',
	state: 'ship',
	status: 'NEW',
	ref: '',
	number: 'Web-25244-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 79.52,
			display_amount: '79.52',
			base_amount: {
				base: 100,
				amount: '7951'
			}
		},
		details: null,
		cart_id: 'REF-28399TPUK',
		transaction_id: '',
		created_at: 1520987847
	},
	delivery: {
		note: '',
		details: {
			contact: {
				name: 'Cosmin Varga',
				company: '',
				phone: '07375086013',
				email: 'y_am_him@yahoo.com'
			},
			address: {
				country_code: 'GBR',
				type: 'RESIDENTIAL',
				street1: '19 Bostocke Close',
				street2: '',
				city: 'Basildon',
				state: 'Essex',
				postal_code: 'SS15 5ET',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'Cosmin Varga',
			company: '',
			phone: '07375086013',
			email: 'y_am_him@yahoo.com'
		},
		address: {
			country_code: 'GBR',
			type: 'RESIDENTIAL',
			street1: '19 Bostocke Close',
			street2: '',
			city: 'Basildon',
			state: 'Essex',
			postal_code: 'SS15 5ET',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '080102111550500',
			name: 'Dulux Diamond Matt (Pure Brilliant White) 5L',
			attribute: {
				colour: '',
				literage: '5'
			},
			price: {
				currency_code: 'GBP',
				amount: 36.92,
				display_amount: '36.92',
				base_amount: {
					base: 100,
					amount: '3691'
				}
			},
			weight: {
				value: 5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 44.3,
				display_amount: '44.30',
				base_amount: {
					base: 100,
					amount: '4429'
				}
			}
		},
		{
			sku: '630302000040090',
			name: 'Hamilton Perfection 9" Long Pile',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 3.44,
				display_amount: '3.44',
				base_amount: {
					base: 100,
					amount: '344'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 4.13,
				display_amount: '4.13',
				base_amount: {
					base: 100,
					amount: '413'
				}
			}
		},
		{
			sku: '630400100000095',
			name: 'Rodo 10" Plastic Roller Tray',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 1.37,
				display_amount: '1.37',
				base_amount: {
					base: 100,
					amount: '137'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 1.64,
				display_amount: '1.64',
				base_amount: {
					base: 100,
					amount: '163'
				}
			}
		},
		{
			sku: 'AXU/RFG9',
			name: 'Axus Grey Immaculate Frame 9" x 1.75"',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 3.77,
				display_amount: '3.77',
				base_amount: {
					base: 100,
					amount: '376'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 4.52,
				display_amount: '4.52',
				base_amount: {
					base: 100,
					amount: '451'
				}
			}
		},
		{
			sku: '470101600003850',
			name: 'Ciret General Purpose Masking Tape 38mm x 50m',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 2.1,
				display_amount: '2.10',
				base_amount: {
					base: 100,
					amount: '209'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 2.52,
				display_amount: '2.52',
				base_amount: {
					base: 100,
					amount: '251'
				}
			}
		},
		{
			sku: '470101600002550',
			name: 'Ciret General Purpose Masking Tape 25mm x 50m',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 1.59,
				display_amount: '1.59',
				base_amount: {
					base: 100,
					amount: '159'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 1.91,
				display_amount: '1.91',
				base_amount: {
					base: 100,
					amount: '190'
				}
			}
		},
		{
			sku: 'PBPT009',
			name: 'RODO PREMIER 6PC BRUSH SET',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 11.25,
				display_amount: '11.25',
				base_amount: {
					base: 100,
					amount: '1125'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 13.5,
				display_amount: '13.50',
				base_amount: {
					base: 100,
					amount: '1350'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 79.52,
		display_amount: '79.52',
		base_amount: {
			base: 100,
			amount: '7951'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 12.09,
		display_amount: '12.09',
		base_amount: {
			base: 100,
			amount: '1209'
		}
	},
	created_at: 1520983313,
	completed_at: -62135596800,
	_rev: '5-636fc424bde94fcead0c8d24f6f8e95a'
};

const order3 = {
	_id: '1c6bc98a-98e6-4c83-b883-0381dff25581',
	channel: 'WEB_UK',
	state: 'ready',
	status: 'NEW',
	ref: '',
	number: 'Web-25241-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 43,
			display_amount: '43.00',
			base_amount: {
				base: 100,
				amount: '4300'
			}
		},
		details: null,
		cart_id: 'REF-28395TPUK',
		transaction_id: '',
		created_at: 1520971447
	},
	delivery: {
		note: 'Please leave outside the door. Many thanks.',
		details: {
			contact: {
				name: 'Tony Williams',
				company: 'TDW Cleaning Services LTD ',
				phone: '07391802672',
				email: 'tdcleaningservicesltd@outlook.com'
			},
			address: {
				country_code: 'GBR',
				type: 'BUSINESS',
				street1: 'Caravan, Bryn Felin',
				street2: '',
				city: 'Newborough ',
				state: '',
				postal_code: 'Ll616su ',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'Tony Williams',
			company: 'TDW Cleaning Services LTD ',
			phone: '07391802672',
			email: 'tdcleaningservicesltd@outlook.com'
		},
		address: {
			country_code: 'GBR',
			type: 'BUSINESS',
			street1: 'Caravan, Bryn Felin',
			street2: '',
			city: 'Newborough ',
			state: '',
			postal_code: 'Ll616su ',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '100110500001000',
			name: 'Johnstones Vinyl Soft Sheen White 10lt',
			attribute: {
				colour: '',
				literage: '10'
			},
			price: {
				currency_code: 'GBP',
				amount: 30.01,
				display_amount: '30.01',
				base_amount: {
					base: 100,
					amount: '3001'
				}
			},
			weight: {
				value: 10,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 36.01,
				display_amount: '36.01',
				base_amount: {
					base: 100,
					amount: '3600'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 43,
		display_amount: '43.00',
		base_amount: {
			base: 100,
			amount: '4300'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 6,
		display_amount: '6.00',
		base_amount: {
			base: 100,
			amount: '600'
		}
	},
	created_at: 1520970874,
	completed_at: -62135596800,
	_rev: '3-efa93ad6710c4c0d91f4f0d494e299ea'
};

const order4 = {
	_id: '4397f0c1-23e6-4fa5-bfdc-ce7c558d9c96',
	channel: 'WEB_UK',
	state: 'ready',
	status: 'NEW',
	ref: '',
	number: 'Web-25148-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 76.43,
			display_amount: '76.43',
			base_amount: {
				base: 100,
				amount: '7643'
			}
		},
		details: null,
		cart_id: 'REF-28286TPUK',
		transaction_id: '',
		created_at: 1520506058
	},
	delivery: {
		note: 'Please leave in back garden or with No 60 if necessary.',
		details: {
			contact: {
				name: 'Lee Nairn',
				company: '',
				phone: '07511745441',
				email: 'mamanairn@hotmail.com'
			},
			address: {
				country_code: 'GBR',
				type: 'RESIDENTIAL',
				street1: '62 Orchard Way',
				street2: '',
				city: 'Wymondham',
				state: 'Norfolk',
				postal_code: 'NR18 0NZ',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'Lee Nairn',
			company: '',
			phone: '07511745441',
			email: 'mamanairn@hotmail.com'
		},
		address: {
			country_code: 'GBR',
			type: 'RESIDENTIAL',
			street1: '62 Orchard Way',
			street2: '',
			city: 'Wymondham',
			state: 'Norfolk',
			postal_code: 'NR18 0NZ',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '5180664',
			name: 'Dulux Trade Ultimate Opaque (All Colours) 2.5L',
			attribute: {
				colour: 'Blue Saturn',
				literage: '2.5'
			},
			price: {
				currency_code: 'GBP',
				amount: 30.16,
				display_amount: '30.16',
				base_amount: {
					base: 100,
					amount: '3015'
				}
			},
			weight: {
				value: 2.5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 36.19,
				display_amount: '36.19',
				base_amount: {
					base: 100,
					amount: '3618'
				}
			}
		},
		{
			sku: '5183368',
			name: 'Dulux Trade All Purpose Primer Grey 2.5L',
			attribute: {
				colour: '',
				literage: '2.5'
			},
			price: {
				currency_code: 'GBP',
				amount: 33.53,
				display_amount: '33.53',
				base_amount: {
					base: 100,
					amount: '3352'
				}
			},
			weight: {
				value: 2.5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 40.24,
				display_amount: '40.24',
				base_amount: {
					base: 100,
					amount: '4024'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 76.43,
		display_amount: '76.43',
		base_amount: {
			base: 100,
			amount: '7643'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 12.74,
		display_amount: '12.74',
		base_amount: {
			base: 100,
			amount: '1273'
		}
	},
	created_at: 1520504998,
	completed_at: -62135596800,
	_rev: '3-48de0d05402f4315be8da64d933de606'
};

const order5 = {
	_id: 'ee85cf39-d379-45ff-9439-8d9f4d6db4d3',
	channel: 'WEB_UK',
	state: 'ready',
	status: 'NEW',
	ref: '',
	number: 'Web-25141-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 78.76,
			display_amount: '78.76',
			base_amount: {
				base: 100,
				amount: '7876'
			}
		},
		details: null,
		cart_id: 'REF-28276TPUK',
		transaction_id: '',
		created_at: 1520461889
	},
	delivery: {
		note: '',
		details: {
			contact: {
				name: 'ALEXANDER NASHED',
				company: 'NASH SERVICE MANAGEMENT LTD',
				phone: '07957202936',
				email: 'zacharyn@hotmail.com'
			},
			address: {
				country_code: 'GBR',
				type: 'BUSINESS',
				street1: 'WOODTHORPE',
				street2: 'PEAR TREE',
				city: 'ASHBURTON',
				state: 'DEVON',
				postal_code: 'TQ13 7QZ',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'ALEXANDER NASHED',
			company: 'NASH SERVICE MANAGEMENT LTD',
			phone: '07957202936',
			email: 'zacharyn@hotmail.com'
		},
		address: {
			country_code: 'GBR',
			type: 'BUSINESS',
			street1: 'WOODTHORPE',
			street2: 'PEAR TREE',
			city: 'ASHBURTON',
			state: 'DEVON',
			postal_code: 'TQ13 7QZ',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '5073966',
			name: 'Sandtex Exterior Eggshell (White) 2.5L',
			attribute: {
				colour: '',
				literage: '2.5'
			},
			price: {
				currency_code: 'GBP',
				amount: 30.35,
				display_amount: '30.35',
				base_amount: {
					base: 100,
					amount: '3035'
				}
			},
			weight: {
				value: 2.5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 36.42,
				display_amount: '36.42',
				base_amount: {
					base: 100,
					amount: '3641'
				}
			}
		},
		{
			sku: '070010400550500',
			name: 'Sandtex Smooth Masonry White  5L',
			attribute: {
				colour: '',
				literage: '5'
			},
			price: {
				currency_code: 'GBP',
				amount: 20.31,
				display_amount: '20.31',
				base_amount: {
					base: 100,
					amount: '2030'
				}
			},
			weight: {
				value: 5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 24.37,
				display_amount: '24.37',
				base_amount: {
					base: 100,
					amount: '2437'
				}
			}
		},
		{
			sku: '5180499',
			name: 'Dulux Trade Danish Oil  1L',
			attribute: {
				colour: '',
				literage: '0'
			},
			price: {
				currency_code: 'GBP',
				amount: 14.97,
				display_amount: '14.97',
				base_amount: {
					base: 100,
					amount: '1497'
				}
			},
			weight: {
				value: 1,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 17.96,
				display_amount: '17.96',
				base_amount: {
					base: 100,
					amount: '1795'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 78.76,
		display_amount: '78.76',
		base_amount: {
			base: 100,
			amount: '7876'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 13.13,
		display_amount: '13.13',
		base_amount: {
			base: 100,
			amount: '1313'
		}
	},
	created_at: 1520460835,
	completed_at: -62135596800,
	_rev: '3-24dfecb829f248889ed792f61478cdb1'
};

const order6 = {
	_id: '1a05ec36-35b7-4815-9448-d41fa3a9b45f',
	channel: 'WEB_UK',
	state: 'ready',
	status: 'NEW',
	ref: '',
	number: 'Web-25243-TPUK',
	payment: {
		amount: {
			currency_code: 'GBP',
			amount: 34.33,
			display_amount: '34.33',
			base_amount: {
				base: 100,
				amount: '3433'
			}
		},
		details: null,
		cart_id: 'REF-28398TPUK',
		transaction_id: '',
		created_at: 1520987297
	},
	delivery: {
		note: '',
		details: {
			contact: {
				name: 'daniel murawski',
				company: 'Complex DnB',
				phone: '07709198210',
				email: 'deco.serv@yahoo.co.uk'
			},
			address: {
				country_code: 'GBR',
				type: 'BUSINESS',
				street1: '21 Quadrant road ',
				street2: '',
				city: 'London',
				state: '',
				postal_code: 'Cr7 7db',
				location_info: {
					postcode: '',
					quality: 0,
					eastings: 0,
					northings: 0,
					country: '',
					nhs_ha: '',
					longitude: 0,
					latitude: 0,
					parliamentary_constituency: '',
					european_electoral_region: '',
					primary_care_trust: '',
					region: '',
					lsoa: '',
					msoa: '',
					incode: '',
					outcode: '',
					admin_district: '',
					parish: '',
					admin_county: '',
					admin_ward: '',
					ccg: '',
					nuts: '',
					codes: null
				}
			}
		}
	},
	billing: {
		contact: {
			name: 'daniel murawski',
			company: '',
			phone: '07709198210',
			email: 'deco.serv@yahoo.co.uk'
		},
		address: {
			country_code: 'GBR',
			type: 'RESIDENTIAL',
			street1: '43 Elderwood place',
			street2: '',
			city: 'London',
			state: '',
			postal_code: 'Se270hj',
			location_info: {
				postcode: '',
				quality: 0,
				eastings: 0,
				northings: 0,
				country: '',
				nhs_ha: '',
				longitude: 0,
				latitude: 0,
				parliamentary_constituency: '',
				european_electoral_region: '',
				primary_care_trust: '',
				region: '',
				lsoa: '',
				msoa: '',
				incode: '',
				outcode: '',
				admin_district: '',
				parish: '',
				admin_county: '',
				admin_ward: '',
				ccg: '',
				nuts: '',
				codes: null
			}
		}
	},
	line_items: [
		{
			sku: '304852',
			name: "Johnstone's Floor Varnish Satin Clear 2.5ltr",
			attribute: {
				colour: '',
				literage: '2.5'
			},
			price: {
				currency_code: 'GBP',
				amount: 22.78,
				display_amount: '22.78',
				base_amount: {
					base: 100,
					amount: '2278'
				}
			},
			weight: {
				value: 2.5,
				unit: 'KG'
			},
			quantity: 1,
			total: {
				currency_code: 'GBP',
				amount: 27.34,
				display_amount: '27.34',
				base_amount: {
					base: 100,
					amount: '2734'
				}
			}
		}
	],
	total: {
		currency_code: 'GBP',
		amount: 34.33,
		display_amount: '34.33',
		base_amount: {
			base: 100,
			amount: '3433'
		}
	},
	tax_total: {
		currency_code: 'GBP',
		amount: 4.56,
		display_amount: '4.56',
		base_amount: {
			base: 100,
			amount: '455'
		}
	},
	created_at: 1520986133,
	completed_at: -62135596800,
	_rev: '3-3a099d1c18734d9cb3e4f9960e8747b3'
};

const Orders = [Order, order2, order3, order4, order5, order6];

export { Order, Orders };
