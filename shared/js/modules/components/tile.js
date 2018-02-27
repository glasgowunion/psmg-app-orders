// StatusTile : Bulma Tile component
// displays a number and a title ( what that number relates to )
// @params id {string} - html id attribute to be used in a selector
// @params number {interger} - number to be used in Tile display
// @params text {string} - to display under number must be one or two words max
function StatusTile(id, number, text) {
	return {
		$type: 'div',
		id: id,
		class: 'tile is-parent',
		$components: [
			{
				$type: 'article',
				class: 'tile is-child box',
				$components: [
					{
						$type: 'p',
						class: 'title',
						$text: number
					},
					{
						$type: 'p',
						class: 'subtitle',
						$text: text
					}
				]
			}
		]
	};
}

// StatusTitleBar : Wraps multiple status tiles to display in a using Bulma
// @params components {[Object]} - arracy of StatusTiles
function StatusTitleBar(components) {
	return {
		$type: 'section',
		class: 'info-tiles',
		$components: [
			{
				$type: 'div',
				$class: 'tile is-ancestor has-text-centered',
				$components: components
			}
		]
	};
}

export { Tile, StatusTitleBar };
