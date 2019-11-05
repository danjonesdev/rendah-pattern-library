import React from "react";

/**
 * Avatar
 */

export default function Avatar(props) {
  const {
    /* Options */
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
    <address className="avatar  flex  flex-wrap  avatar" style={styles}>
      <div className="col-6  col-3-md  avatar__image">
        {image}
      </div>
      <div className="col-18  col-21-md  avatar__dialog">
        {title &&
          <div className="avatar__title">{title}</div>
        }
        {description && (
          <p className="avatar__description">{description}</p>
        )}
      </div>
    </address>
  );
}
