<template>
  <v-app>
    <navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>
<script>
  import Navbar from "../components/App/AppNavbar";
  import AppFooter from "../components/App/AppFooter";

  export default {
    components: { AppFooter, Navbar }
  };
</script>
