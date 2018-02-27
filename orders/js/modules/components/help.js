
// Help : Help component renders a help box on the LHS
// It also provides a link to a fully expanded document
// @params title {string} - Title of helpbox usually just use 'Help'
// @params html {string} - unscaped html string which will provide the help text
// @params link {url} - URL string for a link to complete docs - recommend Hack MD
function Help(title,html,link) {
  var component = {
    $type: 'div',
    class: 'content',
    $components: [
      {
        $type: 'h2',
        class: 'has-text-weight-bold',
        $text: title
      },
      {
        $type: 'div',
        $html: html
      },
      {
        $type: 'a',
        class: 'button is-outlined',
        $text: 'View more docs',
        href: link,
        target: "_blank"
      }
    ]
  }

  return wrapper(component)
}

function wrapper(component) {
  return {
      $type: 'div',
      class: 'box',
      $components: [
        {
          $type: 'article',
          class: 'media',
          $components: [
            {
              $type: 'div',
              class: 'media-content',
              $components: [component]
            }
          ]
        }
      ]
    }
}

export {Help}
