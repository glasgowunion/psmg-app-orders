function LaunchModal(components) {
	var component = {
		$type: 'div',
		id: 'modal',
		class: 'modal is-active',
		$components: [
			{
				$type: 'div',
				class: 'modal-background'
			},
			{
				$type: 'div',
				class: 'modal-content',
				$components: [components]
			},
			{
				$type: 'button',
				class: 'modal-close is-large',
				'aria-label': 'close',
				onclick: function() {
					document.getElementById('modal').remove();
				}
			}
		]
	};

	// add cell to the body
	var cell = window.document.body.$cell(component);
	//console.log(window.document);
	window.document.body.appendChild(cell);
}

export { LaunchModal };
