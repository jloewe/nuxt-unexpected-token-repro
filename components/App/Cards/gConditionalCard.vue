<template>
  <div>
    <v-card v-if="card">
      <v-card-title class="pb-0" v-if="i18n || title">
        <h3 class="headline">{{ titleText }}</h3>
      </v-card-title>
      <v-card-text>
        <slot/>
      </v-card-text>
    </v-card>
    <slot v-else />
  </div>
</template>

<script>
  export default {
    name: "gConditionalCard",
    props: {
      card: {
        type: Boolean,
        default: true
      },
      i18n: String,
      title: String
    },
    computed: {
      titleText() {
        return this.i18n ? this.$t(this.i18n) : this.title;
      }
    }
  }
</script>
