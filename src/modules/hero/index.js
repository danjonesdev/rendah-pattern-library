import React from "react";

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Hero(props) {
  const {
    /* Options */
    color,
    height,
    /* Children */
    image,
    title,
    description,
    button
  } = props;

  const styles = {
    height: `${height}px`
  };

  return (
    <article className="hero" style={styles}>
      <div className="hero__dialog">
        {title && <div className={`hero__title  ${color}`}>{title}</div>}
        {description && (
          <p className={`hero__description  ${color}`}>{description}</p>
        )}
        {button && <div className="hero__button">{button}</div>}
      </div>
      {image && <div className="col-24">{image}</div>}
    </article>
  );
}
