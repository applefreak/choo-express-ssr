const html = require('choo/html')

module.exports = function(state, emit) {
  return html`
    <main>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <a href="/">Home</a>
      <p>URL: ${state.url}</p>
    </main>
  `
}
