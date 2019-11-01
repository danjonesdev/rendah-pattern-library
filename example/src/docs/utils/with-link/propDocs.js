export default [
  {
    name: "type",
    default: "",
    type: "enum",
    description:
      "<code>internal</code>, <code>external</code>, <code>none</code>"
  },
  {
    name: "url",
    default: "",
    type: "string",
    description: ""
  },
  {
    name: "target",
    default: "",
    type: "enum",
    description: "<code>_self</code>, <code>_blank</code>"
  },
  {
    name: "routerLink",
    default: "",
    type: "enum",
    description: "<code>Link</code> Component per react-router-dom, null"
  }
];
