# react-sandbox

[![npm](https://img.shields.io/npm/v/@ohtomi/react-sandbox.svg)](https://www.npmjs.com/package/@ohtomi/react-sandbox)
[![License](https://img.shields.io/npm/l/@ohtomi/react-sandbox.svg)](LICENSE)
[![Build Status](https://travis-ci.org/ohtomi/react-sandbox.svg?branch=master)](https://travis-ci.org/ohtomi/react-sandbox)
[![Greenkeeper badge](https://badges.greenkeeper.io/ohtomi/react-sandbox.svg)](https://greenkeeper.io/)

## Description

This is a repository of `React` sandbox.

## Usage

```console
#
# Translate message resources
#
$ npm run i18n:extract
...
$ ls -la src/i18n/messages/
...
$ npm run i18n:translate
...
$ ls -la src/i18n/locales/
...

#
# Build application
#
$ CI=true npm test
...
$ npm run build
...

#
# Run application
#
$ npm start
...
```

## Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :D

## License

[MIT](https://ohtomi.mit-license.org)
