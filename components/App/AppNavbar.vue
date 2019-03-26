<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in navItems"
          :key="i"
          :to="gLocalePath(item.to)"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ $t(item.i18n) }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
      color="primary"
      dark
      :prominent="hasExtensionSlot"
      :extended="hasExtensionSlot"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <logo class="display-2 font-weight-medium" />
        v{{ version }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template #activator="data">
          <v-btn icon v-on="data.on" class="hidden-xs-only" @click="toggleFullscreen">
            <v-icon>fullscreen</v-icon>
          </v-btn>
        </template>
        <span>{{ $t("tool.navigation.toggleFullscreen") }}</span>
      </v-tooltip>

      <slot slot="extension" name="extension" />
    </v-toolbar>
  </div>
</template>

<script>
  import screenfull from "screenfull";
  import Logo from "./Logo";

  export default {
    name: "AppNavbar",
    components: { Logo },
    methods: {
      toggleFullscreen() {
        screenfull.toggle();
      }
    },
    computed: {
      hasExtensionSlot() {
        return !!this.$slots["extension"];
      }
    },
    data() {
      return {
        version: process.env.version,
        isDark: false,
        drawer: false,
        navItems: [
          {
            icon: "apps",
            i18n: "tool.navigation.page.index",
            to: "index"
          }
        ],
        title: "Tool"
      };
    }
  };
</script>
