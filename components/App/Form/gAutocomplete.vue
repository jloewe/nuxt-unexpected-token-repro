<script>
  import VAutocomplete from "vuetify/es5/components/VAutocomplete/VAutocomplete";
  import { getRules } from "../Validation";
  import { generateLabel } from "./LabelSlotGenerator";

  export default {
    name: "gAutoComplete",
    functional: true,
    props: ["value", "label", "i18n", "validate"],
    render(h, context) {
      let label = context.props.i18n ? context.parent.$t(context.props.i18n) : context.props.label;

      return h(VAutocomplete, {
        attrs: context.data.attrs,
        props: {
          ...context.props,
          rules: getRules(context.parent, label, context.props.validate)
        },
        on: context.listeners
      }, [
        generateLabel(h, label, context.props.validate && context.props.validate.includes("required"))
      ]);
    }
  };
</script>
