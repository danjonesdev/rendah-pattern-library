import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

/**
 * A Label.
 */

export default function Label(props) {
  const {
    /* Options */
    type,
    text,
    color,
    backgroundColor,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  return (
    <WithLink className="label__wrapper" withLinkProps={withLinkProps}>
      <span
        {...hasOnClick}
        className={`label ${type} ${color} bg-${backgroundColor}`}
      >
        {text}
      </span>
    </WithLink>
  );
}
