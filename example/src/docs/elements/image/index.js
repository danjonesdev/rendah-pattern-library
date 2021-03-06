import React from "react";
import { Image } from "rendah-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function ImagePreview(props) {
  return (
    <React.Fragment>
      <PreviewWrapper title={"Image"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
          <div className={"col-24  col-8-md  pa3"}>
            <Image
              /* Options */
              src={"https://via.placeholder.com/1000x1000"}
              placeholder={"https://via.placeholder.com/100x100"}
              alt={"This is the alt text."}
              figcaption={"This is a figcaption."}
              height={400}
              onClick={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
