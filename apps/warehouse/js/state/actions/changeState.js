import { DB } from '/apps/warehouse/js/state/db.js';
import { States } from '/apps/warehouse/js/state/states.js';

// ChangeState : changes state of Order
// @params item {Object} - Order object
// @params newState {string} - tag for new state must be in Order States
async function ChangeState(item, newstate) {
	try {
		// check newstate exists in states
		if (!verifyStateChange(newstate)) {
			throw newstate +
				' is not a verified order state check states.js for verified states';
		}
		// check state field exists
		if (item.hasOwnProperty('state')) {
			item['state'] = newstate;
		} else {
			console.log('order has no state, assigning to icebox');
			item['state'] = 'icebox';
		}
		console.log(item);
		var res = await DB.put(item);
		return res;
	} catch (err) {
		console.log(err);
	}
}

// verifyStateChange : varify new state exist in states
// @params newstate {string} - a string that should below in the States array
function verifyStateChange(newstate) {
	if (States.indexOf(newstate) == -1) {
		return false;
	}
	return true;
}

// ChangeStateOnClick : Binds the change state function
// to a component's on click event
function ChangeStateOnClick(component, id, newState) {
	component._newState = newState;
	component._ref = id;
	component.onclick = function() {
		var self = this;
		var doc = document.getElementById(self._ref);
		ChangeState(doc._data, self._newState)
			.then(function(res) {
				if (res.ok) {
					doc.remove();
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	return component;
}

export { ChangeStateOnClick };
