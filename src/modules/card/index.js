import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import Truncate from 'react-truncate'
import classNames from 'classnames'

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Card(props) {
  const {
    type,
    image,
    imageColumn,
    title,
    description,
    href,
    target,
    onClick,
    price,
    discountPrice,
    button,
    truncate
  } = props

  const HasTruncate = truncate ? Truncate : React.Fragment
  const imageColumnCount = imageColumn || 0;
  const contentColumnCount = 24 - imageColumnCount;
  const hasOnClick = onClick ? { onClick } : ''

  const imageColumnClass = classNames({
    [`col-24  col-${imageColumnCount}-md`]: (imageColumnCount >= 12),
    [`col-${imageColumnCount}`]: (imageColumnCount < 12),
  })

  const contentColumnClass = classNames({
    [`col-24  col-${contentColumnCount}-md`]: (imageColumnCount >= 12),
    [`col-${contentColumnCount}`]: (imageColumnCount < 12),
  })

  const renderContents = () => {
    if (price || discountPrice) {
      return (
        <div className='flex  flex-wrap  align-start  card__contents-wrapper'>
          <div className='col-24  col-19-md'>
              {title && <div className='card__title'>{title}</div>}
              {description && (
                <p className='card__description'>
                  <HasTruncate lines={truncate}>{description}</HasTruncate>
                </p>
              )}
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
          {title && <div className='card__title'>{title}</div>}
          {description && (
            <p className='card__description'>
              <HasTruncate lines={truncate}>{description}</HasTruncate>
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className='flex  flex-wrap'>
      {image && (
        <div className={`${imageColumnClass}`}>
           {image}
         </div>
      )}
      <div className={`${contentColumnClass}  pa2`}>
        {renderContents()}
        <div className='flex  flex-wrap  align-start  card__button-wrapper'>
          {button}
        </div>
      </div>
    </div>
  )
}
