import Vue from "vue";
import {Validator} from "vee-validate";

function setVuetifyLocale(newLocale) {
  import(`vuetify/es5/locale/${newLocale}.js`).then(locale => {
    Vue.prototype.$vuetify.lang.locales[newLocale] = locale.default;
    Vue.prototype.$vuetify.lang.current = newLocale;
  });
}

function setVeeValidateLocale(newLocale) {
  import(`vee-validate/dist/locale/${newLocale}`).then(locale => {
    Validator.localize(newLocale, locale);
  });
}

export default ({app}) => {
  setVuetifyLocale(app.i18n.locale);
  setVeeValidateLocale(app.i18n.locale);

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    setVuetifyLocale(newLocale);
    setVeeValidateLocale(newLocale);
  }
}
