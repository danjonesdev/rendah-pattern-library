import React from 'react'

/**
 * A Button indicates a possible user action.
 */

export default function WithLink(props) {
  console.log('props', props)
  return <button {...props}>{props.children}</button>
}
