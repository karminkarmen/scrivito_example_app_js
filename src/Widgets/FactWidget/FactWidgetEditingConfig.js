import * as Scrivito from "scrivito";
import factWidgetIcon from "../../assets/images/fact_widget.svg";

const initialKey = "Lorem ipsum";

Scrivito.provideEditingConfig("FactWidget", {
  title: "Fact",
  thumbnail: factWidgetIcon,
  initialContent: {
    key: initialKey,
    value: "12",
  },
  validations: [
    [
      "key",

      key => {
        if (!key) {
          return "The key must be specified.";
        }
      },

      key => {
        if (key === initialKey) {
          return "The key must not be the initial content.";
        }
      },
    ],
    [
      "value",

      value => {
        if (!value === 0) {
          return "The value must be specified.";
        }
      },
    ],
  ],
});
