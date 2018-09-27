import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const MyWIdget = Scrivito.provideWidgetClass("MyWIdget", {
  attributes: {
    headline: "string",
  },
});

registerTextExtract("MyWIdget", [
  { attribute: "headline", type: "string" },
]);

export default MyWIdget;
