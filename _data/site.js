const site = {
  title: 'b7s9 | Ben Schenerman',
  description: "Ben Schenerman is a UX researcher, UI designer, Front-end developer, & Audio engineer.",
}

module.exports = function () {
  if (process.env.ELEVENTY_PRODUCTION) {
    site.baseURL = 'https://b7s9.com'
  } else if (process.env.ELEVENTY_URL) {
    site.baseURL = process.env.ELEVENTY_URL
  } else {
    site.baseURL = 'http://localhost:8080'
  }

  return site
}
