import { DB } from '/shared/js/app/orders/db.js'
import { States } from 'shared/js/app/orders/states.js'

// ChangeState : changes state of Order
// @params item {Object} - Order object
// @params newState {string} - tag for new state must be in Order States
export async function ChangeState(item, newstate) {
  try {
    // check newstate exists in states  
    if (!verifyStateChange(newstate)) {
        throw 'New State is not a verified order state check states.js for verified states'
}
    // check state field exists
    if (item.hasOwnProperty('state')) {
      item['state'] = newstate
    } else {
      console.log('order has no state, assigning to icebox')
      item['state'] = 'icebox'
    }
    var res = await DB.put(item)
    return res
  } catch (err) {
    console.log(err)
  }
}

// verifyStateChange : does new state exit in states
function verifyStateChange(newstate) {
  if ((States.indexOf(newstate) == -1)) {
   return true
  }
   return false
} 
