// TwoColumnLayoutWithOffset : Provides a two column Two Column Layout for Bulma
// Offset is on the 2nd column ( the right column )
// @params col1 {integer} - size of 1st column any number between 1 - 12
// @params component {obj} - Component to be rendered in 1 st column
// @params col2 {integer} - size of 2nd column any number between 1 - 12
// @params offsetcol2 {integer} - size of 2nd column offset any number between 1 - 12
// @params component2 {obj} - Component to be rendered in 2 nd column
function TwoColumnLayoutWithOffset(col1,component1,col2,offsetcol2,component2) {

  // create selector for offset
  if (offsetcol2 > 0) {
      offsetcol2 = ' is-offset-' + offsetcol2
  } else {
    offsetcol2 = ''
  }
  // return component with a left and a right layout
  return {
    $type: 'div',
    class: 'columns',
    $components: [
      {
        $type:'column',
        id: 'col1',
        class: 'column is-' + col1,
        $components: [component1]
      },
      {
        $type:'column',
        id: 'col2',
        class: 'column is-' + col2 + offsetcol2,
        $components: [component2]
      }
    ]
  }
}

export {TwoColumnLayoutWithOffset}
