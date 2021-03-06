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
      <PreviewWrapper title={"Heading"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra  relative">
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h1"}
            text={"X-Large Heading"}
            color={"black"}
            size={"x-large"}
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
            reveal={true}
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
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h1"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            color={"black"}
            size={"x-large"}
            truncate={2}
            reveal={false}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h2"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            color={"black"}
            size={"large"}
            truncate={2}
            reveal={false}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h3"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            color={"black"}
            size={"medium"}
            truncate={2}
            reveal={false}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Heading
            /* Options */
            htmlEntity={"h4"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            color={"black"}
            size={"small"}
            truncate={2}
            reveal={false}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
