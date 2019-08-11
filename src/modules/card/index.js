import React from 'react'
import ProgressiveImage  from 'react-progressive-image';


/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Card({ ...props }) {
  const {
    type,
    image,
    imagePlaceholder,
    imageInline,
    title,
    description,
    href,
    target,
    onClick,
    price,
    discountPrice,
    button,
  } = props

  // const ElementhtmlEntity = htmlEntity
  // const isFluid = (fluid) ? 'fluid' : ''
  // const isInverted = (inverted) ? 'inverted' : ''
  // const isLoading = (loading) ? 'loading' : ''
  // const isAriaLoading = (loading) ? {'aria-label': 'Loading'} : ''
  // const isDisabled = (disabled) ? 'disabled' : ''
  const isImageInline = (imageInline) ? 'card__image--inline' : ''
  const hasOnClick = (onClick) ? {onClick} : ''


  const renderImage = () => {
    if (!image) return;

    return (
      <figure>
        <ProgressiveImage
          delay={5000}
          src={image}
          placeholder={imagePlaceholder}
        >
          {src => <img className={`card__image ${isImageInline}`} src={image} alt={title} />}
        </ProgressiveImage>
      </figure>
    )
  }

  const renderContents = () => {
    if (price || discountPrice) {
      return (
        <div className="flex  flex-wrap">
          <div className="col-19">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
          </div>
          <div className="col-5  flex  flex-wrap  justify-end">
            {price && <span className={`card__price  ${discountPrice && 'card__price--has-discount'}`}>{price}</span>}
            {discountPrice && <span className="card__discount-price">{discountPrice}</span>}
          </div>
        </div>
      )
    }

    return (
      <div className="flex  flex-wrap">
        <div className="col-24">
          {title && <h2 className="card__title">{title}</h2>}
          {description && <p className="card__description">{description}</p>}
        </div>
      </div>
    )
  }

  const inlineCheck = () => {
    if (imageInline) {
      return (
        <div className="flex  flex-wrap">
          <div className="col-6">
            {renderImage()}
          </div>
          <div className="col-18  ph2  pt1">
            {renderContents()}
            {button}
          </div>
        </div>
      )
    }

    return (
      <div className="flex  flex-wrap">
        <div className="col-24">
          {renderImage()}
        </div>
        <div className="col-24  ph2">
          {renderContents()}
          {button}
        </div>
      </div>
    )
  }

  return (
     <article
       className={`card ${type}`}
       { ...hasOnClick }
      >
      {inlineCheck()}
    </article>
  )
}
