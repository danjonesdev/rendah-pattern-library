import React from "react";
import { Avatar, Image, Heading, Copy } from "rendah-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function AvatarPreview({ ...props }) {
  const heroImage = (
    <Image
      /* Options */
      src={"https://via.placeholder.com/1000x3000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      height={250}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroHeading = (
    <Heading
      /* Options */
      htmlEntity={"h1"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      color={"black"}
      size={"large"}
      truncate={1}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroCopy = (
    <Copy
      /* Options */
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta."
      }
      color={"black"}
      size={"medium"}
      truncate={1}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Avatar"}
        description={"These are the Hero variations"}
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
          <Avatar
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
          />
        </div>

        <div className={"flex  flex-wrap  mb4"}>
          <Avatar
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
          />
        </div>

        <div className={"flex  flex-wrap  mb4"}>
          <Avatar
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
