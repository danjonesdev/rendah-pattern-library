import React from "react";
import { Icon } from "rendah-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function IconPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Icon"}
        description={"These are the icons"}
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap"}>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"arrow-right"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"facebook"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"twitter"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"instagram"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"soundcloud"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"discord"} color={"#000000"} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"youtube"} color={"#000000"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
