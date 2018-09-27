import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("MyWIdget", ({ widget }) => {
  return <Scrivito.ContentTag content={widget} attribute="headline" />;
});
