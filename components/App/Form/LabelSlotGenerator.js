export function generateLabel(h, label, required) {
  let children = [];

  if (required) {
    // if element is required add red star
    children.push(h("span", {
      "class": "red--text"
    }, [" *"]));
  }

  // create slot for label
  return h("span", {
    slot: "label"
  }, [
    label,
    ...children
  ]);
}
