import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * A card displays site content in a manner similar to a playing card.
 */

class Card extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  }

  render() {
    const { image, title, description, link } = this.props

    return <div className='rpl-card'>Card</div>
  }
}

export default Card
