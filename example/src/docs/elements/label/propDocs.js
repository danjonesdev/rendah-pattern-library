export default [
  {
    name: "type",
    default: "",
    type: "enum",
    description:
      "<code>date</code>, <code>author</code>, <code>price</code>, <code>salePrice</code>, <code>category</code>"
  },
  {
    name: "text",
    default: "",
    type: "string",
    description: ""
  },
  {
    name: "color",
    default: "",
    type: "string",
    description: ""
  },
  {
    name: "backgroundColor",
    default: "",
    type: "string",
    description: ""
  },
  {
    name: "onClick",
    default: "",
    type: "func",
    description: ""
  },
  {
    name: "withLinkProps",
    default: "",
    type: "object",
    description: "Props per <code>WithLink</code> util"
  }
];
