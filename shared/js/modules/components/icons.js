function iconPosition(pos) {
	if (pos == 'right') {
		return ' is-pulled-right';
	}
	return '';
}

function iconColour(colour) {
	return 'color:' + colour + ';';
}

function IconWithLink(link, icon, pos) {
	return {
		$type: 'span',
		class: 'icon is-link' + iconPosition(pos),
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		],
		onclick: function() {
			if (link) {
				window.open(link);
			}
		}
	};
}

function IconWithLinkColour(link, icon, colour, pos) {
	var icon = IconWithLink(link, icon, pos);
	icon.style = iconColour(colour);

	return icon;
}

function Icon(icon, pos) {
	return {
		$type: 'span',
		class: 'icon' + iconPosition(pos),
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		]
	};
}

function IconWithTooltip(icon, tip, pos) {
	return {
		$type: 'span',
		class: 'icon tootip' + iconPosition(pos),
		'data-balloon': tip,
		'data-balloon-pos': 'up',
		$components: [
			{
				$type: 'i',
				class: 'fas ' + icon
			}
		]
	};
}

export { IconWithTooltip, Icon, IconWithLinkColour, IconWithLink };
