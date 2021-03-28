const site = {
  title: 'Ben Schenerman',
  description: "Ben Schenerman's Portfolio",
}

module.exports = function () {
  if (process.env.ELEVENTY_PRODUCTION) {
    site.baseURL = 'https://dev.b7s9.com/portfolio-2021'
  } else if (process.env.ELEVENTY_URL) {
    site.baseURL = process.env.ELEVENTY_URL
  } else {
    site.baseURL = 'http://localhost:8080'
  }

  return site
}
