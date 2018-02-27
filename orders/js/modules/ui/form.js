// ToJson : Serializes a form (DOM) node to a Json Object
// @params form {}
// takes a a form node and returns an array of key values
function ToJson(form) {
  var elements = form.querySelectorAll('input, select, textarea')

  return window.R.reduce(reduceElementsToObject,{}, elements)
}

function mapFormElementsToArray(element) {
  var obj = {}
  obj[element.name] = element.value
  return obj
}

// acc is an accumalator : this will be an abject
// value is a value from the array
function reduceElementsToObject(accum, element) {
    accum[element.name] = element.value
    return accum
}

// takes a selector and returns a json object on submit
// the function should be an async function
function HandleForm(idSelector, fun) {
  var form = window.document.getElementById(idSelector)
  form.addEventListener('submit', function(e) {
    event.preventDefault()
    fun(ToJson(this))
  })
}

// SetForm : takes an id of a form and an object
// and populates that form if the object keys match the (named) elements
function SetForm(idSelector,obj) {
  var form = window.document.getElementById(idSelector)

  // form as json
  var f = ToJson(form)

  // we are presuming that all the keys want to be set
  // TODO: remove disabled keys from this set
  var keys = Object.keys(f)

  // go through form keys
  // if they match any on Object
  // populate form with Oject k/v
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]

    // check form key is on object key
    if (obj.hasOwnProperty(key)) {
      form.elements[key].value = obj[key]
    }
  }
}

// given a selector (returning a valid form)
// map field names to an array
function fieldNames(idSelector) {
  var form = window.document.getElementById(idSelector)
  return ToJson(form)
  //return Oject.keys(form)
}

export { SetForm, ToJson, HandleForm }
