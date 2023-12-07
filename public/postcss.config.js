const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html', './assets/bootstrap/bootstrap.css']
    })
  ]
}