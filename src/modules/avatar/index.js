import React from "react";

/**
 * Avatar
 */

export default function Avatar(props) {
  const {
    /* Options */
    color,
    height,
    /* Children */
    image,
    title,
    description
  } = props;

  const styles = {
    height: `${height}px`
  };

  return (
    <article className="flex  flex-wrap  avatar" style={styles}>
      <div className="col-4">{image}</div>
      <div className="col-20  avatar__dialog">
        {title && <div className={`hero__title  ${color}`}>{title}</div>}
        {description && (
          <p className={`hero__description  ${color}`}>{description}</p>
        )}
      </div>
    </article>
  );
}
