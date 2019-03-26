import Vue from 'vue'

function trimHash(str) {
  if(str.charAt(0) === "#")
    str = str.substr(1);
  return str;
}

function gLocalePathFactory () {
  return function gLocalePath (route, locale) {
    let href = this.localePath(route, locale);
    return trimHash(href);
  }
}

function gSwitchLocalePathFactory () {
  return function gSwitchLocalePath (locale) {
    let path = this.switchLocalePath(locale);
    return trimHash(path);
  }
}

Vue.mixin({
  methods: {
    gLocalePath: gLocalePathFactory(),
    gSwitchLocalePath: gSwitchLocalePathFactory()
  }
});

export default ({ app }) => {
  app.gLocalePath = gLocalePathFactory();
  app.gSwitchLocalePath = gSwitchLocalePathFactory();
}
