const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-netlify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: function () {
        let pages = axios.get('https://playground.kimlarsson.se/wp-json/menus/v1/menus/primary').then((res) => {
            return res.data.items.map((item) => {
              return '/' + item.object_id
            })
        })
        let posts = axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res.data.map((post) => {
              return '/posts/' + post.id
            })
        })
        return Promise.all([pages, posts]).then(values => {
            return values.join().split(',');
        })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
