const choo = require('choo')
const html = require('choo/html')

const app = choo()

function body(template) {
  return function(state, emit) {
    const body = html`
    <body>
      ${template(state, emit)}
    </body>
    `
    if (state.layout) {
      return state.layout(state, body)
    }
    return body
  }
}

app.route('/', body(require('../pages/home')))
app.route('/about', body(require('../pages/about')))

module.exports = app
