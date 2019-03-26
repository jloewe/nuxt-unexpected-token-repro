<template>
  <div>
    <v-footer
      color="primary lighten-1"
      :app="!isSmOrLower"
      :height="isSmOrLower ? 'auto' : '32'"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          class="no-text-transform"
          color="white"
          flat
          round
        >
          2018 - {{ new Date().getFullYear() }} &copy; {{ $t("general.ptb") }}
        </v-btn>
        <v-btn
          class="no-text-transform"
          v-for="link in links"
          :key="link.to"
          :to="gLocalePath(link.to)"
          color="white"
          nuxt
          flat
          round
        >
          {{ $t(link.i18n) }}
        </v-btn>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
  export default {
    computed: {
      isDark() {
        return this.$store.state.app.isDark;
      },
      isSmOrLower() {
        return this.$vuetify.breakpoint.name === "sm" || this.$vuetify.breakpoint.name === "xs";
      }
    },
    data() {
      return {
        links: [
          {
            i18n: "tool.page.about.title",
            to: "about"
          },
          {
            i18n: "tool.page.imprint.title",
            to: "imprint"
          }
        ]
      }
    }
  };
</script>

<style scoped>
  .no-text-transform {
    text-transform: none;
  }
</style>
