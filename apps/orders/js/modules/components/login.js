import * as FB from '/js/modules/ui/formBuilder.js'
import * as Form from '/js/modules/ui/form.js'
import { TwoColumnLayoutWithOffset } from '/js/modules/ui/layout.js'
import { Header } from '/js/modules/components/header.js'
import { Help } from '/js/modules/components/help.js'
import { DispearingNotification } from '/js/modules/components/notification.js'

import { SetupDB } from '/js/modules/db/db.js'
import { Login } from '/js/modules/auth/auth.js'

// Selectors for Page/App
var $$ = {
  body: function() {
    return window.document.body
  },
  col1: function() {
    return window.document.getElementById('col1')
  },
}

var DB = SetupDB('http://localhost:5984/orders')
window.console.log(DB)

var Fields = [
  FB.TextInputRequired('username', 'Name', 'Please enter your username'),
  FB.TextInputWithTypeRequired(
    'password',
    'Password',
    'Please enter your password',
    'password',
  ),
  FB.Submit('login-submit', 'Login'),
]

var LoginForm = TwoColumnLayoutWithOffset(
  4,
  Help(
    'Login',
    '<p>Please use your username and password to login</p><p>Afterwards close this window</p>',
  ),
  7,
  1,
  {
    $type: 'div',
    class: 'box',
    $components: [FB.Form('login', '', Fields)],
  },
)

async function AttemptLogin(formData) {
  try {
    var res = await Login(DB, formData.username, formData.password)

    // show message on success
    var success = $$.body().$cell(
      DispearingNotification(
        'success',
        8000,
        'Login Successful thankyou',
      ),
    )

    // append to dom and remove after 8000 ms
    $$.col1().appendChild(success)
  } catch (error) {
    console.log(formData)
    // catch error and display to console
    console.log('login rejected')
    console.log(error)

    // show message on failed login attempt
    var error = $$.body().$cell(
      DispearingNotification('danger', 8000, 'Login Invalid please try again'),
    )

    // append to dom and remove after 8000 ms
    $$.col1().appendChild(error)
  }
}

var App = {
  $init: function() {
    var self = this
    Form.HandleForm('login', AttemptLogin)
  },
  $cell: true,
  $type: 'div',
  id: 'entry',
  $components: [
    Header('', 'Login', 'Enter your account details to use app'),
    LoginForm,
  ],
}

window.App = App
