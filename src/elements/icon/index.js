import React from 'react'
import {ArrowRight} from './arrow-right';

export const IconLoader = ({ ...props }) => {
  const { icon } = props
  
  switch (icon) {
    case 'arrow-right':
      return <ArrowRight />
      break;
    default:
      return false
  }
};
