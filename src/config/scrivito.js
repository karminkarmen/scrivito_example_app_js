import * as Scrivito from "scrivito";
import { validate } from "validate.js";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  constraintsValidation: constraints => {
    return (value, { name }) => {
      return validate(
        { [name]: value },
        { [name]: constraints },
        {
          format: "flat",
        }
      );
    };
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
