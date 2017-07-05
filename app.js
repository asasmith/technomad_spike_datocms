const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.NODE_ENV
const SpikeDatoCMS = require('spike-datocms')
const locals = { }

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ locals }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: 'b81ff04ff31e21752395',
      models: [{
        name: 'post',
        template: {
          path: 'views/_post.sgr',
          output: (post) => { return `blog/${post.title}.html` }
        }
      }]
    })
  ]
}