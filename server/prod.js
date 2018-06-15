const path = require('path')
const express = require('express')

const routes = require('./routes')
const config = require('./config')

const app = express()

routes(app)

app.use(
  express.static(path.resolve(__dirname, '../dist/'))
);

app.listen(config.listen_port, config.listen_address)
