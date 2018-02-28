var json = {
	data: {
		activity: null,
		delivered_time: '',
		delivery_detail: {
			code: '',
			date: '',
			delivery_attempts: 0,
			desc: '',
			location_desc: '',
			location_type: ''
		},
		destination: {
			addr1: '',
			addr2: '',
			city: 'Dartford',
			country: 'GB',
			postal_code: '',
			state: ''
		},
		dimensions: {
			height: 31,
			length: 31,
			unit: 'CM',
			width: 23
		},
		errors: null,
		estimated_delivery: '2018-02-28T18:00:00+00:00',
		origin: {
			addr1: '',
			addr2: '',
			city: 'Glasgow',
			country: 'GB',
			postal_code: '',
			state: ''
		},
		packages: [
			{
				activity: [
					{
						description: 'Shipment information sent to FedEx',
						documents: null,
						location: {
							city: '',
							code: '',
							country: '',
							description: '',
							postal_code: '',
							state: ''
						},
						proof_of_delivery: '',
						signatory: '',
						status_code: 'OC',
						status_description: 'Shipment information sent to FedEx',
						status_type: '',
						time: '2018-02-27T08:30:52-06:00'
					},
					{
						description: 'Picked up',
						documents: null,
						location: {
							city: 'MOTHERWELL',
							code: '',
							country: 'GB',
							description: '',
							postal_code: 'ML1',
							state: 'ST'
						},
						proof_of_delivery: '',
						signatory: '',
						status_code: 'PU',
						status_description: 'Picked up',
						status_type: '',
						time: '2018-02-27T14:19:00+00:00'
					}
				],
				message: null,
				tracking_number: '771600408515'
			}
		],
		pickup_date: '2018-02-27T14:19:00+00:00',
		reference_numbers: [
			{
				code: 'STANDARD_MPS',
				value: '771600408515'
			},
			{
				code: 'SHIPPER_REFERENCE',
				value: 'Web-24994-TPUK'
			}
		],
		service: {
			code: 'FEDEX_NEXT_DAY_END_OF_DAY',
			description: 'FedEx Next Day'
		},
		shipment_id: '771600408515',
		weight: {
			amount: 0,
			unit: ''
		}
	},
	meta: {
		code: 200,
		error_message: ''
	}
};
