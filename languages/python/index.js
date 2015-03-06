var generator = require('../../lib/generator');

/**
 * Export a client generator instance.
 *
 * @type {Function}
 */
module.exports = generator({
  templates: {
    'rpc_requests.py':      require('./templates/rpc_requests.py.hbs'),
  },
  format: {
    variable: require('camel-case')
  },
  partials: {
  },
  helpers: {
    stringify:         require('javascript-stringify'),
    fullPath:          require('./helpers/fullPath'),
    flatPath:          require('./helpers/flatPath'),
  }
});
