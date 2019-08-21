import React from "react";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function WithLink({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={"WithLink"}
        description={
          "Passed into specific components to wrap them with the desired link"
        }
        propDocs={propDocs}
      />
    </React.Fragment>
  );
}
