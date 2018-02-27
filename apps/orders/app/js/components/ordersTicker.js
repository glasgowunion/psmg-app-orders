// import {GetNewOrders as Counter} from "/modules/store/counters.js"

export var Component = {
  id: 'component-orders-ticker',
  $type: 'div',
  class: 'card events-card',
  _data: 5,//Counter(),
  $init: function() {this.$update()},
  $update: function() {console.log(this._data)}
}
