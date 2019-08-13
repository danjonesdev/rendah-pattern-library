import React from 'react'
import { Image } from 'rendah-pattern-library'

import PreviewWrapper from '../../../components/preview-wrapper'
import propDocs from './propDocs'

export default function ImagePreview(props) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Image'}
        description={'These are the Images'}
        propDocs={propDocs}
      />

      <div className='container  mla  mra'>
        <div className={'flex  flex-wrap  mb4'}>
          <Image
            type={''}
            src={
              'https://joshrduncan.files.wordpress.com/2009/08/mount-massive-ft-panoramic.jpg'
            }
            placeholder={
              'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fscanyourentirelife.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fimage-placeholder-1.jpeg&f=1'
            }
            alt={'This is the alt text.'}
            figcaption={'This is a figcaption.'}
            progressive={true}
            onClick={null}
            withLinkProps={null}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
