const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const pkg = require("./package");


module.exports = {
  mode: "universal",
  env: {
    version: pkg.version
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Reproduction",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#009BCE" },
  loadingIndicator: {
    name: "circle",
    color: "#009BCE"
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/style/app.styl"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/uuid",
    "~/plugins/gLocalizedRoutingMixin",
    "~/plugins/localization",
    { src: "~/plugins/localStorage", ssr: false }
  ],
  transpileDependencies: ["vuex-persist"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "@nuxtjs/pwa",
      {
        manifest: {
          name: "Tool",
          short_name: "T"
        }
      }
    ],
    "@nuxtjs/vuetify",
    [
      "nuxt-i18n",
      {
        seo: false,
        locales: [
          {
            code: "de",
            name: "Deutsch",
            iso: "de-DE",
            file: "de-DE.js"
          },
          {
            code: "en",
            name: "English",
            iso: "assen-US",
            file: "en-US.js"
          }
        ],
        lazy: true,
        langDir: "assets/lang/",
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          // workaround for https://github.com/nuxt-community/nuxt-i18n/issues/34
          messages: {
            en: require("./assets/lang/en-US").default
          }
        }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    babel: {
      presets: ["@nuxt/babel-preset-app"],
      plugins: [
        "@babel/plugin-transform-runtime"
      ]
    },
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    }
  }
};
