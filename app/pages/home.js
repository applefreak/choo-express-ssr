const html = require('choo/html')

module.exports = function(state, emitter) {
  return html`
    <main>
      <h1>Home Page</h1>
      <p>Hello World</p>
      <a href="/about">About</a>
      <p>URL: ${state.url}</p>
    </main>
  `
}

