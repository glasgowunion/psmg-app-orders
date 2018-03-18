import * as Format from '/apps/orders/js/components/formaters.js';

import { ChangeStateOnClick } from '/shared/js/app/orders/actions/changeState.js';

// Import Shared UI Components
import * as Modals from '/shared/js/modules/components/modal.js';
import * as Icons from '/shared/js/modules/components/icons.js';
import * as DropdownButton from '/shared/js/modules/components/DropdownButton.js';

// Import Orders UI
import { Name as RenderNameField } from '/shared/js/app/orders/components/table/fields/name.js';
import { LineItems as RenderLineItems } from '/shared/js/app/orders/components/table/fields/lineItems.js';
import { Header as TableHeader } from '/shared/js/app/orders/components/table/header.js';
import {
	TableCell,
	TableCellText,
	TableCellTextWithComponent
} from '/shared/js/app/orders/components/table/cell.js';

function renderBlankSpan() {
	return {
		$type: 'span'
	};
}

var component = {
	id: 'component-orders-table',
	$type: 'table',
	class: 'table is-bordered is-striped is-narrow is-hoverable is-fullwidth',
	$components: [
		TableHeader(['Name', 'Order', 'Pack', 'Actions']),
		{
			_template: function(item) {
				var map_link =
					'https://www.google.co.uk/maps/place/' +
					item.delivery.details.address.postal_code;
				return {
					$type: 'tr',
					_data: item,
					id: item._id,
					$components: [
						TableCell(RenderNameField(item)),
						TableCell(RenderLineItems(item)),
						TableCell(Pack()),
						TableCell([
							DropdownButton.Group('Next Action', 'right', [
								ChangeStateOnClick(
									DropdownButton.Button('Ship'),
									item._id,
									'ship'
								),
								DropdownButton.Div(),
								ChangeStateOnClick(
									DropdownButton.Button('Move Back'),
									item._id,
									'ready'
								)
							])
						])
					]
				};
			},
			_data: [],
			$update: function() {
				this.$components = this._data.map(this._template);
			},
			id: 'orderData',
			$type: 'tbody'
		}
	]
};

function wrapper(component) {
	return {
		$type: 'div',
		$cell: true,
		class: 'columns',
		$components: [
			{
				$type: 'div',
				class: 'column is-12',
				$components: [component]
			}
		]
	};
}

var Component = wrapper(component);

export { Component };
