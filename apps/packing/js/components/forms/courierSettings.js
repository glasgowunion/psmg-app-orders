import * as FB from '/shared/js/modules/ui/formBuilder.js';

var Fields = [
	FB.TextInputRequired(
		'name',
		'Name',
		'What would you like to call this account?'
	),
	FB.Seperator(),
	FB.TextInputWithPreSelectedValue(
		'shipper',
		'Business Name',
		'The Paintshed Ltd'
	),
	FB.TextInputWithPreSelectedValue('shipper_country', 'Country', 'GBR'),
	FB.Seperator(),
	FB.TextInputRequired('shipper_address1', 'Address Line 1', 'Address Line 1'),
	FB.TextInput('shipper_address2', 'Address Line 2', 'Address Line 2'),
	FB.TextInputRequired('shipper_state', 'State / County', 'State or County'),
	FB.TextInputRequired('shipper_post_code', 'Postcode', 'Postcode'),
	FB.TextInputWithTypeRequired('shipper_phone', 'Phone', 'Phone Number', 'tel'),
	FB.TextInputWithTypeRequired(
		'shipper_email',
		'Email',
		'Email Address',
		'email'
	),
	FB.Seperator(),
	FB.TextInputRequired(
		'account_number',
		'Account Number',
		'Fedex.com Account Number'
	),
	FB.TextInputRequired('meter_number', 'Meter Number', 'Fedex WS Key'),
	FB.TextInputRequired('key', 'Key', 'Fedex WS Key'),
	FB.TextInputRequired('password', 'Password', 'Fedex.com Password'),
	FB.Submit('update', 'Save Details')
];

export { Fields };
