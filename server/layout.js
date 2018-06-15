const html = require('choo/html')
const assets = require('../common/assets')

module.exports = function(state, body = '') {
  return html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${state.title}</title>
      <link rel="stylesheet" type="text/css" href="${assets.get('style.css')}" />
      <script src="${assets.get('app.js')}"></script>
    </head>
    ${body}
  </html>
  `
}
