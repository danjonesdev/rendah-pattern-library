import React from "react";
import ProgressiveImage from "react-progressive-image";

import { Parallax, Background } from "react-parallax";

/**
 * An Image.
 */

export default function Image(props) {
  const {
    type,
    src,
    placeholder,
    alt,
    figcaption,
    progressive,
    // objectFit,
    height,
    onClick,
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = progressive ? ProgressiveImage : React.Fragment;
  // const hasObjectFit = objectFit ? objectFit : "contain";

  return (
    <figure>
      <ElementType delay={500} src={src} placeholder={placeholder}>
        {(src, loading) => (
          <div
            className={`image__wrapper  ${
              loading ? "image__wrapper--loading" : "image__wrapper--loaded"
            }`}
          >
            <Parallax bgImage={src} strength={30}>
              <div style={{ height: height }}></div>
            </Parallax>
          </div>
        )}
      </ElementType>
      {figcaption && (
        <figcaption className="black  f6  t-secondary  tac  mla  mra  pt2">
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}
