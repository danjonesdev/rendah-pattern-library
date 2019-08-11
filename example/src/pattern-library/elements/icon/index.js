import React from 'react'
import { Icon } from "rendah-pattern-library";

import PreviewWrapper from '../../../components/preview-wrapper';

export default function IconPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Icon'}
        description={'These are the icons'}
      />

      <div className="container  mla  mra">
        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-4-md  flex  mb4'}>
            <Icon
              icon={'arrow-right'}
              color={'#000000'}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
