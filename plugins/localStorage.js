import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(vue => {
    createPersistedState({
      key: "settings",
      paths: ["app"]
    })(store);
    setTimeout(() => {
      store.commit("app/setColors", store.state.app.colors);
    }, 1);
  });
};
