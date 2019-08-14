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
    objectFit,
    onClick,
    withLinkProps
  } = props

  const hasOnClick = onClick ? { onClick } : ''
  const hasObjectFit = objectFit ? objectFit : 'contain'

  return (
    <figure>
      <div className="image__wrapper">
        <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
          {(src, loading) => (
            <img className={`image  image--progressive ${loading ? 'image--loading' : ''}  object-fit-${hasObjectFit}`} src={src} alt={alt} />
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
