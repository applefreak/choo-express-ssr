import app from './routes'

app.use((state, emitter) => {
  state.count = 0
})

app.mount('body')

if (module.hot) {
  module.hot.accept()
}
