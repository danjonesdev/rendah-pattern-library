import React from "react";
import { Hero, Image, Heading, Copy, Button } from "rendah-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function HeroPreview({ ...props }) {
  const heroImage = (
    <Image
      src={"https://via.placeholder.com/1000x3000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      height={250}
      onClick={null}
      withLinkProps={null}
    />
  );

  const heroHeading = (
    <Heading
      htmlEntity={"h1"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      color={"black"}
      size={"large"}
      truncate={1}
    />
  );

  const heroCopy = (
    <Copy
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta."
      }
      color={"black"}
      size={"medium"}
      truncate={1}
    />
  );

  const heroButton = (
    <Button
      htmlEntity={"a"}
      text={"Click here"}
      icon={"arrow-right"}
      color={"black"}
      type={"secondary"}
      fluid={false}
      onClick={null}
      size={"small"}
      inverted={false}
      loading={false}
      disabled={false}
      iconFloat={null}
      href={"/"}
      target={"_blank"}
      role={"button"}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Hero"}
        description={"These are the Hero variations"}
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
          <Hero
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>

        <div className={"flex  flex-wrap  mb4"}>
          <Hero
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>

        <div className={"flex  flex-wrap  mb4"}>
          <Hero
            /* Options */
            color={"black"}
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
