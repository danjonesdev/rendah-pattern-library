import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// modules
import HeroPreview from './docs/modules/hero'
import CardPreview from './docs/modules/card'

// elements
import ButtonPreview from './docs/elements/button'
import IconPreview from './docs/elements/icon'
import HeadingPreview from './docs/elements/heading'
import ImagePreview from './docs/elements/image'

// utils
import WithLinkPreview from './docs/utils/with-link'

export default function App() {
  return (
    <Router>
      <div className='flex  flex-wrap'>
        <nav className='docs-nav'>
          <div className='pa3'>
            <h1 className='t-title  f5  bold  mb2'>Modules</h1>
            <ul className='pa0  ma0  mb3  ls-none'>
              <li className='mb1'>
                <Link to='/hero'>Hero</Link>
              </li>
              <li className='mb1'>
                <Link to='/card'>Card</Link>
              </li>
            </ul>

            <h1 className='t-title  f5  bold  mb2'>Elements</h1>
            <ul className='pa0  ma0  mb3  ls-none'>
              <li className='mb1'>
                <Link to='/button'>Button</Link>
              </li>
              <li className='mb1'>
                <Link to='/icon'>Icon</Link>
              </li>
              <li className='mb1'>
                <Link to='/heading'>Heading</Link>
              </li>
              <li className='mb1'>
                <Link to='/image'>Image</Link>
              </li>
            </ul>

            <h1 className='t-title  f5  bold  mb2'>Utils</h1>
            <ul className='pa0  ma0  mb3  ls-none'>
              <li className='mb1'>
                <Link to='/with-link'>WithLink</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className='docs-main'>
          <Route exact path='/' component={null} />
          <Route exact path='/hero' component={HeroPreview} />
          <Route path='/card' component={CardPreview} />
          <Route path='/button' component={ButtonPreview} />
          <Route path='/icon' component={IconPreview} />
          <Route path='/heading' component={HeadingPreview} />
          <Route path='/image' component={ImagePreview} />
          <Route path='/with-link' component={WithLinkPreview} />
        </main>
      </div>
    </Router>
  )
}
