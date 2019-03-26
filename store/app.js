import PersistedState from "vuex-persistedstate";

export const plugins = [PersistedState];

export const state = () => ({
  colors: {
    primary: "#009BCE",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  isDark: false
});

export const mutations = {
  setColors(app, newColors) {
    Object.keys(newColors).forEach(key => {
      app.colors[key] = newColors[key];
      this._vm.$vuetify.theme[key] = newColors[key];
    });
  }
};
