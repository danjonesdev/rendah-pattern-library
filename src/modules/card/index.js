import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import classNames from 'classnames';

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Card(props) {
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
    button
  } = props

  // const ElementhtmlEntity = htmlEntity
  // const isFluid = (fluid) ? 'fluid' : ''
  // const isInverted = (inverted) ? 'inverted' : ''
  // const isLoading = (loading) ? 'loading' : ''
  // const isAriaLoading = (loading) ? {'aria-label': 'Loading'} : ''
  // const isDisabled = (disabled) ? 'disabled' : ''
  const isImageInline = imageInline ? 'card__image--inline' : ''
  const hasOnClick = onClick ? { onClick } : ''

  const imageWrapperClass = classNames({
    'col-10': imageInline,
    'col-24': !imageInline,
    });

  const contentsWrapperClass = classNames({
    'col-14  ph3  pt1': imageInline,
    'col-24  ph2  pt3': !imageInline,
    });

  const renderImage = () => {
    if (!image) return

    return (
      <figure>
        <ProgressiveImage
          delay={5000}
          src={image}
          placeholder={imagePlaceholder}
        >
          {src => (
            <img
              className={`card__image ${isImageInline}`}
              src={image}
              alt={title}
            />
          )}
        </ProgressiveImage>
      </figure>
    )
  }

  const renderContents = () => {
    if (price || discountPrice) {
      return (
        <div className='flex  flex-wrap  align-start  card__contents-wrapper'>
          <div className='col-24  col-19-md'>
            <h2 className='card__title'>{title}</h2>
            <p className='card__description'>{description}</p>
          </div>
          <div className='col-24  col-5-md  flex  flex-wrap  justify-start  justify-end-md'>
            {price && (
              <span
                className={`card__price  ${discountPrice &&
                  'card__price--has-discount'}`}
              >
                {price}
              </span>
            )}
            {discountPrice && (
              <span className='card__discount-price'>{discountPrice}</span>
            )}
          </div>
        </div>
      )
    }

    return (
      <div className='flex  flex-wrap  align-start  card__contents-wrapper'>
        <div className='col-24'>
          {title && <h2 className='card__title'>{title}</h2>}
          {description && <p className='card__description'>{description}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className='flex  flex-wrap'>
      <div className={imageWrapperClass}>
        {renderImage()}
      </div>
      <div className={contentsWrapperClass}>
        {renderContents()}
        <div className='flex  flex-wrap  align-end  card__button-wrapper'>
          {button}
        </div>
      </div>
    </div>
  )
}
