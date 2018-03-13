import * as Icons from '/shared/js/modules/components/icons.js';

// Header : Component for page header
function Header(id, title_text, subtitle_text) {
	var component = {
		$type: 'div',
		id: id,
		class: 'container',
		$components: [title(title_text), subtitle(subtitle_text)]
	};
	return wrapper(component);
}

// Header : Component for page header
function HeaderWithHomeLink(id, path, title_text, subtitle_text) {
	var component = {
		$type: 'div',
		id: id,
		class: 'container',
		$components: [
			titlewithIconWithLink(
				Icons.IconWithLink(path, 'fa-home', 'right'),
				title_text
			),
			subtitle(subtitle_text)
		]
	};
	return wrapper(component);
}

// creates a title element for the hero / header element
function title(text) {
	return {
		$type: 'h1',
		$text: text,
		class: 'title'
	};
}

// creates a title element for the hero / header element
function titlewithIconWithLink(component, text) {
	return {
		$type: 'h1',
		class: 'title',
		$components: [component, { $type: 'span', $text: text }]
	};
}

// creates a subtitle element for the hero / header element
function subtitle(text) {
	return {
		$type: 'h2',
		$text: text,
		class: 'subtitle'
	};
}

// wrapper wraps the component in a bulma html layout
function wrapper(component) {
	return {
		$type: 'div',
		$cell: true,
		class: 'columns',
		$components: [
			{
				$type: 'div',
				class: 'column is-12',
				$components: [
					{
						$type: 'section',
						class: 'hero welcome is-small',
						$components: [
							{
								$type: 'div',
								class: 'hero-body',
								$components: [component]
							}
						]
					}
				]
			}
		]
	};
}

export { Header, HeaderWithHomeLink };
