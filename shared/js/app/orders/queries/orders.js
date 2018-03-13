import { DB } from '/shared/js/app/orders/db.js';

export async function NewOrders() {
	try {
		var res = await DB.find({
			selector: { status: 'New Order' }
		});
		return res.docs;
	} catch (err) {
		console.log(err);
	}
}
