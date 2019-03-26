<template>
  <div>
    <v-card v-if="card">
      <v-system-bar window>
        {{ titleText }}
        <v-spacer></v-spacer>
        <v-icon @click="$emit('move-down')">keyboard_arrow_down</v-icon>
        <v-icon @click="$emit('move-up')">keyboard_arrow_up</v-icon>
        <v-icon @click="$emit('minimize')" v-if="maximized">remove</v-icon>
        <v-icon @click="$emit('maximize')" v-else>check_box_outline_blank</v-icon>
        <v-icon @click="$emit('remove')">close</v-icon>
      </v-system-bar>

      <v-card-text v-if="maximized">
        <slot />
      </v-card-text>
    </v-card>
    <slot v-else />
  </div>
</template>

<script>
  export default {
    name: "gCollapsibleCard",
    props: {
      card: {
        type: Boolean,
        default: true
      },
      i18n: String,
      title: String,
      maximized: Boolean
    },
    computed: {
      titleText() {
        return this.i18n ? this.$t(this.i18n) : this.title ? this.title : "";
      }
    }
  };
</script>
