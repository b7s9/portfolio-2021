const site = {
  title: 'b7s9',
  description: "Ben Schenerman is a UX researcher, UI designer, Front-end developer, & Audio engineer.",
}

module.exports = function () {
  if (process.env.ELEVENTY_PRODUCTION) {
    site.baseURL = 'https://b7s9.com'
  } else if (process.env.ELEVENTY_STAGE) {
    site.baseURL = 'https://dev.b7s9.com/portfolio-2021'
  } else if (process.env.ELEVENTY_URL) {
    site.baseURL = process.env.ELEVENTY_URL
  } else {
    site.baseURL = 'http://localhost:8080'
  }

  site.projectImgURL = site.baseURL + '/assets/project-galleries'

  return site
}
