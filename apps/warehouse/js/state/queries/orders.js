export async function NewOrders(DB) {
	try {
		var res = await DB.find({
			selector: { status: 'NEW' }
		});
		return res.docs;
		console.log(res.docs);
	} catch (err) {
		console.log(err);
	}
}

export async function WarehouseState(DB, state) {
	try {
		var res = await DB.find({
			selector: { state: state }
		});
		return res.docs;
		console.log(res.docs);
	} catch (err) {
		console.log(err);
	}
}

export async function ViewStateCount(DB, key) {
	try {
		var res = await DB.query('count-state/count-state', {
			key: key,
			group: true,
			reduce: true
		});
		return res;
	} catch (err) {
		console.log(err);
	}
}

//UpdateViewStateCount : used for updating status tiles in the app
export function UpdateViewStateCount(id, state) {
	ViewStateCount(state).then(function(res) {
		var entries = res.rows;
		if (entries.length == 1) {
			var entry = entries[0];
			var sel = document.getElementById(id);
			sel._text = entry.value;
			sel.$update();
		}
	});
}

// Tests

// A viewCount should return an empty result set if the state is not found
// normally we would throw an error but this makes it easier to display a component with
// a null count
window.Tests.TestInvalidStateShouldReturnZeroRows = function() {
	ViewStateCount('invalid').then(function(res) {
		console.assert(
			res.rows.length == 0,
			'Expected rows to be an empty array but got',
			res.rows
		);
	});
};
