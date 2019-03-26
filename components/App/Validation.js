import isEmail from "validator/lib/isEmail"

export function getRules(parent, label, validate) {
  // fix for $t this context
  let $t = (str, arr) => parent.$t.call(parent, str, arr);
  let rules = [];

  if (validate) {
    for (let rule of validate.split("|")) {
      switch (rule) {
        case "required":
          rules.push(v => !!v || $t("form.errors.required", [label]));
          break;
        case "email":
          rules.push(v => isEmail(v) || $t("form.errors.email", [label]));
          break;
      }
    }
  }
  return rules;
}
