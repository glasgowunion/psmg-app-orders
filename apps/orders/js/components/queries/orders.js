import { SetupDB } from '/shared/js/modules/db/db.js';

var DB = SetupDB('https://boveselfineactsementsdon:7cbcf23d17bfe02b2df352211213e7eadc7a6f27@895b0bb4-e351-41b3-b17e-c7f0597292c6-bluemix.cloudant.com/orders');


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
