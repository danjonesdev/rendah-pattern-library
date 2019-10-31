import React from "react";
import TruncateMarkup from "react-truncate-markup";

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
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  return (
    <span
      {...hasOnClick}
      className={`label ${type} ${color} bg-${backgroundColor}`}
    >
      {text}
    </span>
  );
}
