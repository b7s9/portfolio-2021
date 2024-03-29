const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget('./_tmp/style.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/lib/alpine.js',
  })

  eleventyConfig.addPassthroughCopy({
    './node_modules/tinygesture/TinyGesture.js': './js/lib/TinyGesture.js',
  })

  eleventyConfig.addPassthroughCopy({ 'assets/': 'assets/' })
  eleventyConfig.addPassthroughCopy({ 'js/': 'js/' })
  eleventyConfig.addPassthroughCopy({ 'favicon.ico/': 'favicon.ico/' })

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now())
  })

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    // excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: '.',
      output: '_site',
    },
  }
}
