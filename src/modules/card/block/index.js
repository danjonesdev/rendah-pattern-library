import React from "react";
import ProgressiveImage from "react-progressive-image";

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function CardBlock(props) {
  const {
    type,
    image,
    title,
    description,
    href,
    target,
    onClick,
    price,
    discountPrice,
    button
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  const renderContents = () => {
    if (price || discountPrice) {
      return (
        <div className="flex  flex-wrap  align-start  card__contents-wrapper">
          <div className="col-24  col-19-md">
            {title && <div className="card__title">{title}</div>}
            {description && (
              <div className="card__description">{description}</div>
            )}
          </div>
          <div className="col-24  col-5-md  flex  flex-wrap  justify-start  justify-end-md">
            {price && (
              <span
                className={`card__price  ${discountPrice &&
                  "card__price--has-discount"}  tar  w-100`}
              >
                {price}
              </span>
            )}
            {discountPrice && (
              <span className="card__discount-price">{discountPrice}</span>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="flex  flex-wrap  align-start  card__contents-wrapper">
        <div className="col-24">
          {title && <div className="card__title">{title}</div>}
          {description && (
            <div className="card__description">{description}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="card  card--small  flex  flex-wrap">
      {image && <div className="col-24">{image}</div>}
      <div className="col-24">
        {renderContents()}
        <div className="flex  flex-wrap  align-start  card__button-wrapper">
          {button}
        </div>
      </div>
    </div>
  );
}
