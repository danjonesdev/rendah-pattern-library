import React from 'react'
import ProgressiveImage from 'react-progressive-image'
/**
 * An Image.
 */

export default function Image(props) {
  const {
    type,
    src,
    placeholder,
    alt,
    figcaption,
    progressive,
    onClick,
    withLinkProps
  } = props

  const hasOnClick = onClick ? { onClick } : ''

  return (
    <figure>
      <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
        {src => <img src={src} alt={alt} />}
      </ProgressiveImage>
      {figcaption && (
        <figcaption className='black  f6  t-secondary  tac  mla  mra'>
          {figcaption}
        </figcaption>
      )}
    </figure>
  )
}
