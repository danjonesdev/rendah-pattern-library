import React from 'react'
import { Hero, Heading, Button } from 'rendah-pattern-library'

import PreviewWrapper from '../../../components/preview-wrapper'

export default function HeroPreview({ ...props }) {
  const exampleHeading = (
    <Heading
      htmlEntity={'h1'}
      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      color={'black'}
      size={'large'}
      truncate={null}
    />
  )

  const button = (
    <Button
      htmlEntity={'a'}
      text={'Click here'}
      icon={'arrow-right'}
      color={'black'}
      type={'secondary'}
      fluid={false}
      onClick={null}
      size={'small'}
      inverted={false}
      loading={false}
      disabled={false}
      iconFloat={null}
      href={'/'}
      target={'_blank'}
      role={'button'}
    />
  )

  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Hero'}
        description={'These are the Hero variations'}
      />

      <div className='container  mla  mra'>
        <div className={'flex  flex-wrap  mb4'}>
          <Hero
            type={'small'}
            image={'https://via.placeholder.com/1000x3000'}
            title={exampleHeading}
            description={'Description goes here'}
            color={'black'}
            button={button}
          />
        </div>

        <div className={'flex  flex-wrap  mb4'}>
          <Hero
            type={'medium'}
            image={'https://via.placeholder.com/1000x3000'}
            title={exampleHeading}
            description={'Description goes here'}
            color={'black'}
            button={button}
          />
        </div>

        <div className={'flex  flex-wrap  mb4'}>
          <Hero
            type={'large'}
            image={'https://via.placeholder.com/1000x3000'}
            title={exampleHeading}
            description={'Description goes here'}
            color={'black'}
            button={button}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
