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
      <div className="image__wrapper">
        <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
          {(src, loading) => (
            <img className={`image  image--progressive ${loading ? 'image--loading' : ''}`} src={src} alt={alt} />
          )}
        </ProgressiveImage>
      </div>
      {figcaption && (
        <figcaption className='black  f6  t-secondary  tac  mla  mra  pt2'>
          {figcaption}
        </figcaption>
      )}
    </figure>
  )
}
