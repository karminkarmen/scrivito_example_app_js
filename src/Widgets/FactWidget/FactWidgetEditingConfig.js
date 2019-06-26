import * as Scrivito from "scrivito";
import factWidgetIcon from "../../assets/images/fact_widget.svg";

const defaultKey = "Lorem ipsum";

Scrivito.provideEditingConfig("FactWidget", {
  title: "Fact",
  thumbnail: factWidgetIcon,
  initialContent: {
    key: defaultKey,
    value: "12",
  },
  validations: [
    [
      "key",

      key => {
        if (key.length === 0) {
          return "The key must be specified.";
        }
      },

      key => {
        if (key === defaultKey) {
          return "The key must not be the default one.";
        }
      },
    ],
    [
      "value",

      value => {
        if (value.length === 0) {
          return "The value must be specified.";
        }
      },
    ],
  ],
});
