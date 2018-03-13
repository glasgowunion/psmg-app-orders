function Group(text, pos, buttons) {
	if (pos == 'right') {
		pos = ' is-pulled-right';
	} else {
		pos = '';
	}
	return {
		$type: 'div',
		class: 'dropdown is-hoverable' + pos,
		$components: [
			{
				$type: 'div',
				class: 'dropdown-trigger',
				$components: [
					{
						$type: 'button',
						class: 'button',
						'aria-haspopup': 'true',
						'aria-controls': 'dropdown-menu',
						$components: [
							{
								$type: 'span',
								$text: text
							},
							{
								$type: 'span',
								class: 'icon is-small',
								$components: [
									{
										$type: 'i',
										class: 'fas fa-angle-down',
										'aria-hidden': 'true'
									}
								]
							}
						]
					}
				]
			},
			{
				$type: 'div',
				class: 'dropdown-menu',
				//id: 'dropdown-menu',
				role: 'menu',
				$components: [
					{
						$type: 'div',
						class: 'dropdown-content',
						$components: buttons
					}
				]
			}
		]
		// onclick: function() {
		// 	var self = this;
		// 	console.log(self);
		// 	self.classList.add('is-active');
		// }
	};
}

function Button(text) {
	return {
		$type: 'a',
		href: '#',
		class: 'dropdown-item',
		$text: text
	};
}

function Div(text) {
	return {
		$type: 'hr',
		class: 'dropdown-divider'
	};
}

export { Group, Button, Div };
