import React from "react";

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function CardThumbnail(props) {
  const {
    /* Options */
    type,
    price,
    discountPrice,
    onClick,
    /* Children */
    image,
    title,
    description,
    button
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  const renderContents = () => {
    const priceBlock = () => {
      if (price || discountPrice) {
        return (
          <div className="col-24  flex">
            {price && (
              <span
                className={`card__price  ${discountPrice &&
                  "card__price--has-discount"}`}
              >
                {price}
              </span>
            )}
            {discountPrice && (
              <span className="card__discount-price">{discountPrice}</span>
            )}
          </div>
        );
      }

      return false;
    };

    return (
      <div className="flex  flex-wrap  align-start  card__contents-wrapper">
        {priceBlock && priceBlock()}
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
      {image && <div className="col-6">{image}</div>}
      <div className="col-18  pa2">
        {renderContents()}
        <div className="flex  flex-wrap  align-start  card__button-wrapper">
          {button}
        </div>
      </div>
    </div>
  );
}
