// Select : Builds a select component
// @params id {string} - id of input (must be unique)
// @param label {string} - Standard Form Label
// @param optionLabel {string} - First label in the dropdown (always disabled)
// @param options {[Object]} - array of id / label pairs
// // values should be lowercase and unique
function Select(id, label, optionLabel, options) {
  // generate inner control
  var control = {
    $type: 'select',
    id: id,
    $components: [
      {
        $type: 'option',
        $text: optionLabel,
      },
      R.map(mapOptionsToComponent, options),
    ],
  }

  // wrap conrol in outer form
  return fieldWrapper(label, control)
}

// mapOptionsToComponent : function to be used in Ramda map
// @params option {Oject} - id / label pair
function mapOptionsToComponent(option) {
  return {
    $type: 'option',
    id: option.id,
    $text: option.label,
  }
}

function Seperator() {
  return {
    $type: 'hr',
  }
}

function Required(obj) {
  obj.required = 'true'
  return obj
}

function TextInputWithPreSelectedValue(id, label, value) {
  // generate inner control
  var control = {
    $type: 'input',
    name: id,
    class: 'input',
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    type: 'text',
    value: value,
    disabled: true,
  }

  // wrap control in outer form
  return fieldWrapper(label, control)
}

function Submit(id, label) {
  // generate inner control
  var control = {
    $type: 'button',
    id: id,
    class: 'button is-link',
    type: 'submit',
    $text: label,
  }

  // wrap control in outer form
  return fieldWrapper('', control)
}

function TextInputWithTypeRequired(id, label, placeholder, type) {
  // generate inner control
  var control = {
    $type: 'input',
    name: id,
    class: 'input',
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    type: type,
    placeholder: placeholder,
    required: 'true',
  }

  // wrap control in outer form
  return fieldWrapper(label, control)
}

function TextInputWithType(id, label, placeholder, type) {
  // generate inner control
  var control = {
    $type: 'input',
    name: id,
    class: 'input',
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    type: type,
    placeholder: placeholder,
  }

  // wrap control in outer form
  return fieldWrapper(label, control)
}

function Form(id, setclass, fields) {
  return {
    $type: 'form',
    id: id,
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    class: setclass,
    $components: fields,
  }
}

function TextInputRequired(id, label, placeholder) {
  // generate inner control
  var control = {
    $type: 'input',
    name: id,
    class: 'input',
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    type: 'text',
    placeholder: placeholder,
    required: 'true',
  }

  // wrap control in outer form
  return fieldWrapper(label, control)
}

function TextInput(id, label, placeholder) {
  // generate inner control
  var control = {
    $type: 'input',
    name: id,
    class: 'input',
    autocomplete: 'set-to-anything-to-fix-chrome-bug',
    type: 'text',
    placeholder: placeholder,
  }

  // wrap control in outer form
  return fieldWrapper(label, control)
}

// fieldWrapper : wraps a component in its field structure
// @params label {string} -  Standard Form label
// @params control {Oject} - a single celljs component
function fieldWrapper(label, control) {
  return {
    $type: 'div',
    class: 'field',
    $components: [
      {
        $type: 'label',
        class: 'label',
        $text: label,
      },
      {
        $type: 'div',
        class: 'control',
        $components: [control],
      },
    ],
  }
}

export {
  Select,
  Submit,
  Required,
  TextInput,
  TextInputRequired,
  TextInputWithType,
  TextInputWithTypeRequired,
  TextInputWithPreSelectedValue,
  Seperator,
  Form,
}
