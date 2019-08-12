import React from 'react'

import Accordion from '../accordion'

export default function PreviewWrapper({ ...props }) {
  const { title, description, propDocs } = props

  return (
    <div className='container  mla  mra  pv3  mb4  bb  bc-black'>
      <h1 className='t-primary  f3  mb2'>{title}</h1>
      <p className='t-secondary  f5  mb3'>{description}</p>
      {propDocs && <Accordion title='View props' content={propDocs} />}
    </div>
  )
}
