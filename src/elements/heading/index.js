import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

/**
 * A Heading.
 */

export default function Heading(props) {
  const {
    /* Options */
    htmlEntity,
    text,
    color,
    size,
    truncate,
    reveal,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = htmlEntity || "h1";
  const hasTruncate = truncate ? true : false;
  const hasReveal = reveal ? "heading--reveal" : "";
  const ElementTypeInner = hasTruncate ? TruncateMarkup : React.Fragment;

  let lineHeight;
  switch (size) {
    case "small":
      lineHeight = hasReveal ? 20 + 10 : 20;
      break;
    case "medium":
      lineHeight = hasReveal ? 24 + 15 : 24;
      break;
    case "large":
      lineHeight = hasReveal ? 38 + 15 : 38;
      break;
    case "x-large":
      lineHeight = hasReveal ? 32 + 24 : 32;
      break;
    default:
      lineHeight = hasReveal ? 20 + 10 : 20;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : "auto"
  };

  return (
    <WithLink withLinkProps={withLinkProps}>
      <ElementType
        {...hasOnClick}
        className={`heading ${size} ${color} ${hasReveal}`}
        style={styles}
      >
        <ElementTypeInner lines={truncate}>
          <span>{text}</span>
        </ElementTypeInner>
      </ElementType>
    </WithLink>
  );
}
