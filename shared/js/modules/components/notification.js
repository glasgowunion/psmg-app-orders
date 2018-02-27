// A Bulma notification that disapears
// @params type {string} - type of notification e.g. error or success
// @params time {interger(ms)} - time in ms that the notification stays on the page
// @params msg {string} - message to display inside the notification
function DispearingNotification(type, time, msg) {
	var setClass = 'notification';
	if (type == 'error' || type == 'danger') {
		setClass = 'notification is-danger';
	}
	return {
		$type: 'div',
		class: setClass,
		$text: msg,
		$init: function() {
			var self = this;
			setInterval(function() {
				self.remove();
			}, time);
		}
	};
}

export { DispearingNotification };
