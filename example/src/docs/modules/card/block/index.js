import React from "react";
import { Card, Image, Heading, Copy, Button } from "rendah-pattern-library";

import PreviewWrapper from "../../../../components/preview-wrapper";
import propDocs from "../propDocs";

export default function CardBlockPreview({ ...props }) {
  const cardblockImage = (
    <Image
      type={""}
      src={"https://via.placeholder.com/1000x1000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      progressive={true}
      objectFit={"cover"}
      height={200}
      onClick={null}
      withLinkProps={null}
    />
  );

  const cardBlockHeading = (
    <Heading
      htmlEntity={"h2"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet"
      }
      color={"black"}
      size={"small"}
      truncate={2}
    />
  );

  const cardBlockCopy = (
    <Copy
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
      }
      color={"black"}
      size={"medium"}
      truncate={2}
    />
  );

  const cardBlockButton = (
    <Button
      htmlEntity={"a"}
      text={"Click here"}
      icon={"arrow-right"}
      color={"black"}
      type={"primary"}
      fluid={false}
      onClick={null}
      size={"small"}
      inverted={false}
      loading={false}
      disabled={false}
      iconFloat={null}
      withLinkProps={{
        type: "internal",
        url: "/hello",
        target: "_blank"
      }}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Card"}
        description={"These are the card variations"}
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3  mb4"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              href={"/"}
              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3  mb4"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              href={"/"}
              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3  mb4"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              href={"/"}
              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3  mb4"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              href={"/"}
              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
