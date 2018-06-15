const convict = require('convict')

const conf = convict({
  listen_address: {
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'IP_ADDRESS'
  },
  listen_port: {
    format: 'port',
    default: 3000,
    arg: 'port',
    env: 'PORT'
  }
})

conf.validate({ allowed: 'strict' })

const props = conf.getProperties()

module.exports = props;
