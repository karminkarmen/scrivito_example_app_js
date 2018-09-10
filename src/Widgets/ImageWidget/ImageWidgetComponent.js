import * as React from "react";
import * as Scrivito from "scrivito";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

Scrivito.provideComponent("ImageWidget", ({ widget }) => {
  let image = (
    <Scrivito.ImageTag
      content={widget}
      attribute="image"
      alt={alternativeText(widget)}
    />
  );

  const link = widget.get("link");
  if (link && !Scrivito.isInPlaceEditingActive()) {
    image = <Scrivito.LinkTag to={link}>{image}</Scrivito.LinkTag>;
  }

  if (["center", "right"].includes(widget.get("alignment"))) {
    return <div className={`text-${widget.get("alignment")}`}>{image}</div>;
  }

  const animation = widget.get("animation");
  const additionalProps = {
    "": animation,
  };

  if (animation === "Zoom") {
    return <Zoom>{image}</Zoom>;
  }
  return <Fade {...additionalProps}>{image}</Fade>;
});

function alternativeText(widget) {
  const widgetAlternativeText = widget.get("alternativeText");
  if (widgetAlternativeText) {
    return widgetAlternativeText;
  }

  const image = widget.get("image");
  if (image) {
    return image.get("alternativeText");
  }

  return "";
}
