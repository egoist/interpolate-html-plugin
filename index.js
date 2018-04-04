'use strict'

/*
 * The code is almost copied directly from
 * https://github.com/facebookincubator/create-react-app/blob/d1250743adc2abc41d80d566c5f817e1a16da279/packages/react-dev-utils/InterpolateHtmlPlugin.js
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// This Webpack plugin lets us interpolate custom variables into `index.html`.
// Usage: `new InterpolateHtmlPlugin({ 'MY_VARIABLE': 42 })`
// Then, you can use %MY_VARIABLE% in your `index.html`.

// It works in tandem with HtmlWebpackPlugin.
// Learn more about creating plugins like this:
// https://github.com/ampedandwired/html-webpack-plugin#events

'use strict'
const escapeStringRegexp = require('escape-string-regexp')

class InterpolateHtmlPlugin {
  constructor(replacements) {
    this.replacements = replacements
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'InterpolateHtmlPlugin',
        data => {
          // Run HTML through a series of user-specified string replacements.
          Object.keys(this.replacements).forEach(key => {
            const value = this.replacements[key]
            data.html = data.html.replace(
              new RegExp('%' + escapeStringRegexp(key) + '%', 'g'),
              value
            )
          })
        }
      )
    })
  }
}

module.exports = InterpolateHtmlPlugin
