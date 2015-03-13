var generator = require('../../lib/generator');

/**
 * Export a client generator instance.
 *
 * @type {Function}
 */
module.exports = generator({
  templates: {
    'rpc_requests.py'  : require('./templates/rpc_requests.py.hbs'),
    'test.py'          : require('./templates/test.py.hbs'),
    'server_mock.py'   : require('./templates/server_mock.py.hbs'),
    'server_wsgi.py'   : require('./templates/server_wsgi.py.hbs'),
    'server_tornado.py': require('./templates/server_tornado.py.hbs'),
  },
  format: {
    variable: require('camel-case')
  },
  partials: {
  },
  helpers: {
    stringify:         require('javascript-stringify'),
    getUriList:        require('./helpers/getUriList'),
    fullPath:          require('./helpers/fullPath'),
    flatPath:          require('./helpers/flatPath'),
    importJson:        require('./helpers/importJson'),
  }
});
