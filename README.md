# b7s9 Portfolio (2021)

This portfolio is a SSG built on Javascript. It features dark mode and swipe interactions.

## Docs

[Eleventy](https://www.11ty.dev), [Tailwind CSS](https://tailwindcss.com), [Alpine.js](https://github.com/alpinejs/alpine).

## Instructions

### Local Dev

The `start` command watches for changes on save

```
npm install
npm start
```

### Production build

This changes the baseURL to remote, and optimizes a few things. The resulting `_site/` directory can be copied onto remote.

```
npm run build
```

### Stage build

This is a copy of the production script but prepares the baseURL for staging on a private subdomain for testing. 

```
npm run stage
```

## Credits

Template and [article](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/) by [Greg Wolanski](https://gregwolanski.com)

MIT License
