import { DB } from '/shared/js/app/orders/db.js'

export async function NewOrders() {
  try {
    var res = await DB.find({
      selector: { status: 'NEW' },
    })
    return res.docs
    console.log(res.docs)
  } catch (err) {
    console.log(err)
  }
}

export async function WarehouseState(state) {
  try {
    var res = await DB.find({
      selector: { state: state },
    })
    return res.docs
    console.log(res.docs)
  } catch (err) {
    console.log(err)
  }
}

export async function ViewStateCount(key) {
  try {
    var res = await DB.query('count-state/count-state', {
      key: key,
      group: true,
      reduce: true,
    })
    return res
  } catch (err) {
    console.log(err)
  }
}

//UpdateViewStateCount : used for updating status tiles in the app
export function UpdateViewStateCount(id, state) {
  ViewStateCount(state).then(function(res) {
    console.log(res)
    var entries = res.rows
    if (entries.length == 1) {
      var entry = entries[0]
      var sel = document.getElementById(id)
      console.log(entry.value)
      sel._text = entry.value
      sel.$update()
    }
  })
}
