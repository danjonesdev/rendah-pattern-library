import React from 'react'
import { Heading } from 'rendah-pattern-library'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import PreviewWrapper from '../../../components/preview-wrapper'
import propDocs from './propDocs'

export default function HeadingPreview(props) {

  console.log('ParallaxProvider', ParallaxProvider);
  return (
    <React.Fragment>
      <ParallaxProvider>

        <PreviewWrapper
          title={'Heading'}
          description={'These are the icons'}
          propDocs={propDocs}
        />

      <div className='container  mla  mra  relative'>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h1'}
            text={'X-Large Heading'}
            color={'black'}
            size={'x-large'}
            truncate={null}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h2'}
            text={'Large Heading'}
            color={'black'}
            size={'large'}
            truncate={null}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h3'}
            text={'Medium Heading'}
            color={'black'}
            size={'medium'}
            truncate={null}
          />
        </div>
        <div className={'flex  flex-wrap  mb4'}>
          <Heading
            htmlEntity={'h4'}
            text={'Small Heading'}
            color={'black'}
            size={'small'}
            truncate={null}
          />
        </div>
      </div>

      <div className="absolute top left mt6  pt6   w-100">
        <Parallax className="custom-class absolute" y={[0, -200]} tagOuter="figure">
          <img className="" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </Parallax>
        <Parallax className="custom-class absolute" y={[0, 200]} tagOuter="figure">
          <img className="" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </Parallax>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </ParallaxProvider>
    </React.Fragment>
  )
}
