import { DB } from '/shared/js/app/orders/db.js';

const states = ['icebox', 'new', 'pack', 'ship', 'accounts', 'archive'];

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
