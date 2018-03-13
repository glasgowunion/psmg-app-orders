import { SetupDB } from '/shared/js/modules/db/db.js';

const states = ['icebox', 'new', 'pack', 'ship', 'accounts', 'archive'];

var DB = SetupDB(
	'https://boveselfineactsementsdon:7cbcf23d17bfe02b2df352211213e7eadc7a6f27@895b0bb4-e351-41b3-b17e-c7f0597292c6-bluemix.cloudant.com/orders'
);

export async function ChangeState(item) {
	try {
		if (!item.hasOwnProperty('state')) {
			item['state'] = 'pack';
		}
		item.state = 'pack';
		var res = await DB.put(item);
		return res;
	} catch (err) {
		console.log(err);
	}
}
