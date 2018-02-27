import { SetupDB } from '/shared/js/modules/db/db.js';

var DB = SetupDB('http://localhost:5984/orders');

export async function NewOrders() {
	try {
		console.log(DB);
		var res = await DB.find({
			selector: { status: 'New Order' }
		});
		//    void (await LocalDB.orders.bulkAdd(res.docs))
		// SetCounter(res.docs.length)
		return res.docs;
	} catch (err) {
		console.log(err);
	}
}
