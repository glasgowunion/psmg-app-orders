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
            $text: number,
          },
          {
            $type: 'p',
            class: 'subtitle',
            $text: text,
          },
        ],
      },
    ],
  }
}

// StatusTileWithIcon: Bulma Tile component with icon
// displays a number and a title ( what that number relates to )
// @params id {string} - html id attribute to be used in a selector
// @params number {icon component} - number to be used in Tile display
// @params text {string} - to display under number must be one or two words max
function StatusTileWithIcon(id, icon, text) {
  // add title component to icon component
  // icon.class = icon.class + ' title'
  icon.style = 'font-size:1.4rem;line-height:1.2;'
  return {
    $type: 'div',
    id: id,
    class: 'tile is-parent',
    $components: [
      {
        $type: 'article',
        class: 'tile is-child box',
        $components: [
          icon,
          {
            $type: 'p',
            class: 'subtitle',
            $text: text,
          },
        ],
      },
    ],
  }
}

// StatusTitleBar : Wraps multiple status tiles to display in a using Bulma
// @params components {[Object]} - array of StatusTiles
function StatusTitleBar(components) {
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
            class: 'info-tiles',
            $components: [
              {
                $type: 'div',
                class: 'tile is-ancestor has-text-centered',
                $components: components,
              },
            ],
          },
        ],
      },
    ],
  }
}

// StatusTitleBarWithLabel : Wraps multiple status tiles to display in a using Bulma
// @params label {string} - label to use as a header
// @params components {[Object]} - array of ststus titles
function StatusTitleBarWithLabel(label, components) {
  return {
    $type: 'div',
    $components: [
      {
        $type: 'div',
        class: 'columns',
        $components: [
          {
            $type: 'div',
            class: 'column is-12',
            $components: [
              {
                $type: 'h2',
                style: 'font-size:1.25rem;color:hsl(192, 17%, 99%);',
                $text: label,
              },
            ],
          },
        ],
        $type: 'div',
        class: 'columns',
        $components: [
          {
            $type: 'div',
            class: 'column is-12',
            $components: [
              {
                $type: 'section',
                class: 'info-tiles',
                $components: [
                  {
                    $type: 'div',
                    class: 'tile is-ancestor has-text-centered',
                    $components: components,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
}

export {
  StatusTile,
  StatusTileWithIcon,
  StatusTitleBar,
  StatusTitleBarWithLabel,
}
