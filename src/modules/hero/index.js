import React from 'react'
import ProgressiveImage  from 'react-progressive-image';


/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Hero({ ...props }) {
  const {
    type,
    image,
    title,
    description,
    color,
    button,
  } = props

  return (
     <article
       className={`hero ${type}`}
       style={{backgroundImage: `url(${image})`}}
      >
      <div className="hero__dialog">
        {title && <h1 className={`hero__title  ${color}`}>{title}</h1>}
        {description && <p className={`hero__description  ${color}`}>{description}</p>}
        {button && <div className="hero__button">{button}</div>}
      </div>
    </article>
  )
}
