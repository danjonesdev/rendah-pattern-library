import React from 'react'

import PreviewWrapper from '../../../components/preview-wrapper'
import propDocs from './propDocs'

export default function WithLink({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'WithLink'}
        description={'WithLink'}
        propDocs={propDocs}
      />
    </React.Fragment>
  )
}
