import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

/**
 * A Heading.
 */

export default function Heading(props) {
  const {
    htmlEntity,
    text,
    color,
    size,
    truncate,
    onClick,
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = htmlEntity || "h1";
  const hasTruncate = truncate ? true : false;
  const ElementTypeInner = hasTruncate ? TruncateMarkup : React.Fragment;

  let lineHeight;
  switch (size) {
    case "small":
      lineHeight = 20;
      break;
    case "medium":
      lineHeight = 24;
      break;
    case "large":
      lineHeight = 28;
      break;
    case "x-large":
      lineHeight = 32;
      break;
    default:
      lineHeight = 20;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : "auto"
  };

  return (
    <ElementType
      {...hasOnClick}
      className={`heading ${size} ${color}`}
      style={styles}
    >
      <WithLink withLinkProps={withLinkProps}>
        <ElementTypeInner lines={truncate}>
          <span>{text}</span>
        </ElementTypeInner>
      </WithLink>
    </ElementType>
  );
}
