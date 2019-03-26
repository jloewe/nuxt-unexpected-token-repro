<script>
  import VTextarea from "vuetify/es5/components/VTextarea/VTextarea";
  import { getRules } from "../Validation";
  import { generateLabel } from "./LabelSlotGenerator";

  export default {
    name: "gTextField",
    functional: true,
    props: ["value", "label", "i18n", "validate"],
    render(h, context) {
      let label = context.props.i18n ? context.parent.$t(context.props.i18n) : context.props.label;

      return h(VTextarea, {
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
