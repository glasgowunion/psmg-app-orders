// Pack : Displays a Pack field
// allows a use to enter the with and number of packages
function Pack() {
	return [
		{
			$type: 'div',
			class: 'field-body',
			$components: [
				{
					$type: 'div',
					class: 'field',
					$components: [
						{
							$type: 'p',
							class: 'control is-expanded has-icons-left',
							$components: [
								{
									$type: 'input',
									class: 'input',
									type: 'number',
									placeholder: 'Weight',
									value: ''
								},
								{
									$type: 'span',
									class: 'icon is-small is-left',
									$components: [
										{
											$type: 'i',
											class: 'fas fa-weight'
										}
									]
								}
							]
						}
					]
				},
				{
					$type: 'div',
					class: 'field',
					$components: [
						{
							$type: 'p',
							class: 'control is-expanded has-icons-left',
							$components: [
								{
									$type: 'input',
									class: 'input',
									type: 'number',
									placeholder: 'Boxes',
									value: ''
								},
								{
									$type: 'span',
									class: 'icon is-small is-left',
									$components: [
										{
											$type: 'i',
											class: 'fas fa-boxes'
										}
									]
								}
							]
						}
					]
				},
				{
					$type: 'p',
					class: 'control',
					$components: [
						{
							$type: 'a',
							class: 'button',
							$components: [
								{
									$type: 'span',
									class: 'icon is-small',
									$components: [
										{
											$type: 'i',
											class: 'fas fa-check'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	];
}

export { Pack };
