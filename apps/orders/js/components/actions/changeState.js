import { SetupDB } from '/shared/js/modules/db/db.js';

const states = ['new', 'pack', 'ship', 'transfer'];

var DB = SetupDB('http://localhost:5984/orders2');

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
