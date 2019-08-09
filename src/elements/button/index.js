import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * A Button indicates a possible user action.
 */

export default function Button({ ...props }) {
  console.log('props', props)
  const ElementType = props.type

  return <ElementType className='rpl-button'>Button</ElementType>
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'a', 'div']),
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  role: PropTypes.string
}
