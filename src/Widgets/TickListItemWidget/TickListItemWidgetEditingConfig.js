import * as Scrivito from "scrivito";

const initialStatement = "Lorem ipsum";

Scrivito.provideEditingConfig("TickListItemWidget", {
  title: "Tick List Item",
  initialContent: {
    statement: initialStatement,
  },
  validations: [
    [
      "statement",

      statement => {
        if (!statement) {
          return "The statement must be specified.";
        }
      },

      statement => {
        if (statement === initialStatement) {
          return "The statement must not be the initial content.";
        }
      },
    ],
  ],
});
