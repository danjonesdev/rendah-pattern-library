import React, { useState } from "react";
import { Heading } from "rendah-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function HeadingPreview(props) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Heading"}
        description={"Heading only really varies in it's size"}
        propDocs={propDocs}
      />

      <div className="container  mla  mra  relative">
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            htmlEntity={"h1"}
            text={"X-Large Heading"}
            color={"black"}
            size={"x-large"}
            truncate={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            htmlEntity={"h2"}
            text={"Large Heading"}
            color={"black"}
            size={"large"}
            truncate={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            htmlEntity={"h3"}
            text={"Medium Heading"}
            color={"black"}
            size={"medium"}
            truncate={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            htmlEntity={"h4"}
            text={"Small Heading"}
            color={"black"}
            size={"small"}
            truncate={null}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
