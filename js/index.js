var fs = require('fs');
var generator = require('raml-generator');

function load(fn) {
    return fs.readFileSync(__dirname+fn+'.hbs','utf8');
}

/**
 * Export a client generator instance.
 *
 * @type {Function}
 */
module.exports = generator({
  templates: {
    '.gitignore':   load('/templates/.gitignore'),
    'index.js':     load('/templates/index.js'),
    'README.md':    load('/templates/README.md'),
    'INSTALL.md':   load('/templates/INSTALL.md'),
    'package.json': load('/templates/package.json')
  },
  format: {
    variable: require('camel-case')
  },
  partials: {
    auth:      load('/partials/auth.js'),
    utils:     load('/partials/utils.js'),
    client:    load('/partials/client.js'),
    resources: load('/partials/resources.js'),
  },
  helpers: {
    stringify:         require('javascript-stringify'),
    dependencies:      require('./helpers/dependencies'),
    requestSnippet:    require('./helpers/request-snippet'),
    parametersSnippet: require('./helpers/parameters-snippet')
  }
});
