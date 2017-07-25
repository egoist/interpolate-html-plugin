# interpolate-html-plugin

[![NPM version](https://img.shields.io/npm/v/interpolate-html-plugin.svg?style=flat)](https://npmjs.com/package/interpolate-html-plugin) [![NPM downloads](https://img.shields.io/npm/dm/interpolate-html-plugin.svg?style=flat)](https://npmjs.com/package/interpolate-html-plugin) [![Build Status](https://img.shields.io/circleci/project/egoist/interpolate-html-plugin/master.svg?style=flat)](https://circleci.com/gh/egoist/interpolate-html-plugin) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

Extracted from [create-react-app](https://github.com/facebookincubator/create-react-app/blob/d1250743adc2abc41d80d566c5f817e1a16da279/packages/react-dev-utils/InterpolateHtmlPlugin.js)

## Install

This plugin is supposed to work with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/)

```bash
yarn add interpolate-html-plugin --dev
```

## Usage

```js
module.exports = {
  plugins: [
    new InterpolateHtmlPlugin({
      'NODE_ENV': 'development'
    })
  ]
}
```

Then you can use `%NODE_ENV%` in your template html file, and you can use it with html-webpack-plugin's default template syntax (lodash.template):

```js
<% if ('%NODE_ENV%' === 'development') { %>
do something
<% } %>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**interpolate-html-plugin** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/interpolate-html-plugin/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
