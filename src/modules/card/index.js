import React from "react";

import CardBlock from "./block";

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Card(props) {
  const { type } = props;

  if (type === "block") {
    return <CardBlock {...props} />;
  }

  return false;
}
