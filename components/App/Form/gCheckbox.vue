<script>
  import VCheckbox from "vuetify/es5/components/VCheckbox/VCheckbox";
  import { getRules } from "../Validation";
  import { generateLabel } from "./LabelSlotGenerator";

  export default {
    name: "gCheckbox",
    functional: true,
    props: ["value", "label", "i18n", "validate"],
    render(h, context) {
      let label = context.props.i18n ? context.parent.$t(context.props.i18n) : context.props.label;

      return h(VCheckbox, {
        attrs: context.data.attrs,
        props: {
          ...context.props,
          rules: getRules(context.parent, label, context.props.validate)
        },
        on: {
          ...context.listeners,
          // checkbox emits change event and not input...
          change: context.listeners.input
        }
      }, [
        generateLabel(h, label, context.props.validate && context.props.validate.includes("required"))
      ]);
    }
  };
</script>
