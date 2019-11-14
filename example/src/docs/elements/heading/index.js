import React from "react";
import { Heading } from "rendah-pattern-library";
import { Link } from "react-router-dom";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function HeadingPreview(props) {
  const withLinkProps = {
    type: "internal",
    url: "/",
    target: "_top",
    routerLink: Link
  };

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
            /* Options */
            htmlEntity={"h1"}
            text={"X-Large Heading"}
            color={"black"}
            size={"x-large"}
            truncate={null}
            reveal={null}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h2"}
            text={"Large Heading"}
            color={"black"}
            size={"large"}
            truncate={null}
            reveal={true}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h3"}
            text={"Medium Heading"}
            color={"black"}
            size={"medium"}
            truncate={null}
            reveal={null}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h4"}
            text={"Small Heading"}
            color={"black"}
            size={"small"}
            truncate={null}
            reveal={true}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
