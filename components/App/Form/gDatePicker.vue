<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <g-text-field
      v-model="date"
      :validate="validate"
      :label="label"
      :i18n="i18n"
      slot="activator"
      prepend-icon="event"
      readonly
    />
    <v-date-picker v-model="date" no-title scrollable :locale="$i18n.locale" :first-day-of-week="firstDayOfWeek">
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">{{ $t("form.datePicker.cancel") }}</v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(date)">{{ $t("form.datePicker.ok") }}</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
  import GTextField from "./gTextField";

  export default {
    name: "gDatePicker",
    components: { GTextField },
    inheritAttrs: true,
    props: ["value", "label", "i18n", "validate"],
    computed: {
      date: {
        get() {
          return this.value;
        },
        set(date) {
          this.$emit("input", date);
        }
      },
      firstDayOfWeek() {
        return parseInt(this.$t("lang.firstDayOfWeek"));
      }
    },
    data() {
      return {
        uuid: `u${this.$uuid.v4()}`,
        menu: false
      };
    }
  };
</script>
