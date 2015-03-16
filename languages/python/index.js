var generator = require('../../lib/generator');

/**
 * Export a client generator instance.
 *
 * @type {Function}
 */
module.exports = generator({
  templates: {
    'rpc_requests.py'  : require('./templates/rpc_requests.py.hbs'),
    'rpc_tornado.py'   : require('./templates/rpc_tornado.py.hbs'),
    'rpc_urlfetch.py'  : require('./templates/rpc_tornado.py.hbs'),
    'rpc_httplib2.py'  : require('./templates/rpc_tornado.py.hbs'),
    'rpc_httplib.py'   : require('./templates/rpc_tornado.py.hbs'),
    'rpc_geventhttpclient.py':
      require('./templates/rpc_geventhttpclient.py.hbs'),
    'rpc_gae.py'       : require('./templates/rpc_gae.py.hbs'),
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
