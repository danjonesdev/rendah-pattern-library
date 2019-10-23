import React from "react";
import ProgressiveImage from "../../utils/progressive-image";
// import { Parallax, Background } from "react-parallax";

/**
 * An Image.
 */

export default function Image(props) {
  const {
    src,
    placeholder,
    alt,
    figcaption,
    height,
    onClick,
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = placeholder ? ProgressiveImage : "img";

  const styles = {
    height: `${height}px`
  };

  return (
    <figure className="image__wrapper" style={styles}>
      <ElementType
        src={src}
        placeholder={placeholder}
        height={height}
        alt={alt}
      ></ElementType>

      {figcaption && (
        <figcaption className="black  f6  t-secondary  tac  mla  mra  pt2">
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}
