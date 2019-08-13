import React from 'react'
import { Heading } from 'rendah-pattern-library'

import PreviewWrapper from '../../../components/preview-wrapper'
import propDocs from './propDocs'

export default function HeadingPreview(props) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Heading'}
        description={'These are the icons'}
        propDocs={propDocs}
      />

      <div className='container  mla  mra'>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h1'}
            text={'X-Large Heading'}
            color={'black'}
            size={'x-large'}
            truncate={2}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h2'}
            text={'Large Heading'}
            color={'black'}
            size={'large'}
            truncate={2}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h3'}
            text={'Medium Heading'}
            color={'black'}
            size={'medium'}
            truncate={2}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h4'}
            text={'Small Heading'}
            color={'black'}
            size={'small'}
            truncate={2}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
