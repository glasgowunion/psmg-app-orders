import * as FB from '/js/modules/ui/formBuilder.js'
import * as Form from '/js/modules/ui/form.js'
import { TwoColumnLayoutWithOffset } from '/js/modules/ui/layout.js'
import { Header } from '/js/modules/components/header.js'
import { Help } from '/js/modules/components/help.js'
import { Fields } from '/app/js/components/forms/CourierSettings.js'
import { DispearingNotification } from '/js/modules/components/notification.js'

var DB = new PouchDB('http://localhost:5984/courier_fedex_domestic_glasgow')

var Cache = {}

var $$ = {
  body: function() {
    return window.document.body
  },
  col1: function() {
    return window.document.getElementById('col1')
  },
}

async function GetCourierSetting() {
  try {
    var res = await DB.get('setting:courier')
    return res
  } catch (err) {
    var error = $$.body().$cell(
      DispearingNotification(
        'danger',
        8000,
        'error fetching form <br> please check your internet connection and try again',
      ),
    )
    $$.col1().appendChild(error)
  }
}

// Save to couchdb
// _rev data is saved on Cache
async function SaveCourierSetting(formData) {
  var setting = formData
  setting._id = 'setting:courier'
  setting._rev = Cache._rev
  try {
    var res = await DB.put(setting)
    var success = $$.body().$cell(
      DispearingNotification(
        'success',
        8000,
        'Settings updated please close the page',
      ),
    )
    $$.col1().appendChild(success)
    Cache._rev = res.rev
  } catch (rejectedValue) {
    console.log('form rejected')
    console.log(rejectedValue)
    var error = $$.body().$cell(
      DispearingNotification(
        'danger',
        8000,
        'form could not be saved <br> please try again then refresh the page',
      ),
    )
    $$.col1().appendChild(error)
  }
}

var ShipperSettingsPage = TwoColumnLayoutWithOffset(
  4,
  Help(
    'Help',
    '<p><strong>Fedex Requires you have 4 things</strong><ul><li>An Account Number</li><li>A Web Number</li></ul></p>',
    'http://google.com',
  ),
  7,
  1,
  {
    $type: 'div',
    class: 'box',
    $components: [FB.Form('settings', '', Fields)],
  },
)

var App = {
  $init: function() {
    var self = this
    Form.HandleForm('settings', SaveCourierSetting)
    GetCourierSetting().then(function(res) {
      Form.SetForm('settings', res)
      Cache._rev = res._rev
    })
  },
  $cell: true,
  $type: 'div',
  id: 'entry',
  $components: [
    Header('', 'Courier Settings', 'Setup your courier account here'),
    ShipperSettingsPage,
  ],
}

window.App = App
