import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("PricingSpecWidget", {
  title: "Pricing Spec",
  validations: [
    [
      "variable",

      variable => {
        if (variable.length === 0) {
          return "The variable must be specified.";
        }
      },
    ],
    [
      "unit",

      unit => {
        if (unit.length === 0) {
          return "The unit must be specified.";
        }
      },
    ],
  ],
});
