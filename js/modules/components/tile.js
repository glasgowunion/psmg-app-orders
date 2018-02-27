function Tile(id, number, text) {
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

function FourTitleDisplay() {
  return {
    $type: 'section',
    class: 'info-tiles',
    $components: [
      {
        $type: 'div',
        $class: 'tile is-ancestor has-text-centered',
        $components: [t1, t2, t3, t4],
      },
    ],
  }
}

export { Tile, FourTitleDisplay }
