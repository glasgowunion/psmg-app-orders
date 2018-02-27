// A Bulma notification that disapears
function DispearingNotification(type,time,msg) {
  var setClass = "notification"
  if (type == "error" || type == "danger") {
    setClass = "notification is-danger"
  }
  return {
    $type: 'div',
    class: setClass,
    $text: msg,
    $init: function() {
      var self = this
      setInterval(
        function(){ self.remove() },
        time
        );
      }
    }
}

export {DispearingNotification}
