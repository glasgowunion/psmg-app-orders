import * as Format from '/apps/warehouse/js/components/renderers/formaters.js';
import { ChangeStateOnClick } from '/apps/warehouse/js/state/actions/changeState.js';

// Import Shared UI Components
import * as Modals from '/shared/js/modules/components/modal.js';
import * as Icons from '/shared/js/modules/components/icons.js';
import * as DropdownButton from '/shared/js/modules/components/DropdownButton.js';
import { Header as TableHeader } from '/shared/js/modules/components/table/header.js';
import {
	TableCell,
	TableCellText,
	TableCellTextWithComponent
} from '/shared/js/modules/components/table/cell.js';

// Import Fields
import { Name as RenderNameField } from '/apps/warehouse/js/components/table/fields/name.js';
import { LineItems as RenderLineItems } from '/apps/warehouse/js/components/table/fields/lineItems.js';
import { Pack } from '/apps/warehouse/js/components/table/fields/pack.js';

// function renderBlankSpan() {
// 	return {
// 		$type: 'span'
// 	};
// }

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
