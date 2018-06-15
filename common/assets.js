const genmap = require('../build/gen_asset_map')
const isServer = typeof genmap === 'function'
const prefix = isServer ? '/' : ''
let manifest = {}
try {
  manifest = require('../dist/manifest.json')
} catch (e) {
  // use middleware
}

const assets = isServer ? manifest : genmap

function getAsset(name) {
  return prefix + assets[name]
}

const instance = {
  get: getAsset,
  setMiddleware: function(middleware) {
    if (middleware) {
      instance.get = function getAssetWithMiddleware(name) {
        const f = middleware.fileSystem.readFileSync(
          middleware.getFilenameFromUrl('/manifest.json')
        )
        return prefix + JSON.parse(f)[name]
      }
    }
  }
}

module.exports = instance
