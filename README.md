# RAML Generator CLI

Template-driven generator of RAML objects for APIs described by RAML.

## Installation

First, make sure [node](http://nodejs.org) has been installed.

```sh
# Download this package (if you haven't already)
git clone https://github.com/val314159/raml-generator-cli

# cd into the aforementioned package:
cd raml-generator-cli

# Then, we can install it using `npm`:
npm install
```

## Installing Plugins:

To list plugins:

```sh
node install_plugin.js
```

To install javascript:

```sh
node install_plugin.js javascript
```

To install python:

```sh
node install_plugin.js python
```

## Usage

To generate an API client, point the command to your base RAML file and specify the output directory and language.

```sh
./bin/raml-generator-cli.js [api.raml] -o [output_directory] -l [target_language]
```

## Supported Languages

* [JavaScript](languages/javascript) (`javascript`)
  * Node and browser support
  * Promises
  * Complete OAuth 2.0 Support
  * Multiple instances
  * Automatic `README.md` and `package.json` generation
  * Multi-part form data

We're excited to see new languages soon! If you have a language you'd like to implement, check out the [implementation guide](IMPLEMENTATION.md).

## Testing

```sh
npm install
npm test # This *will* test every language.
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/raml-client-generator.svg?style=flat
[npm-url]: https://npmjs.org/package/raml-client-generator
[downloads-image]: https://img.shields.io/npm/dm/raml-client-generator.svg?style=flat
[downloads-url]: https://npmjs.org/package/raml-client-generator
[travis-image]: https://img.shields.io/travis/mulesoft/raml-client-generator.svg?style=flat
[travis-url]: https://travis-ci.org/mulesoft/raml-client-generator
