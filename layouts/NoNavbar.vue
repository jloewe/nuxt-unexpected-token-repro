<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
  import AppFooter from "../components/App/AppFooter";
  export default {
    name: "NoNavbar",
    components: { AppFooter }
  };
</script>
