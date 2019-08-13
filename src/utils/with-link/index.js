import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
// const Link = 'Link'

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const {
    withLinkProps
  } = props

  if (!withLinkProps) return <span {...props}>{props.children}</span>;

  switch (withLinkProps.type) {
    case 'internal':
    return <Router><Link target={withLinkProps.target} to={withLinkProps.url} {...props}>{props.children}</Link></Router>
      break;
    case 'external':
    return <a target={withLinkProps.target} href={withLinkProps.url} {...props}>{props.children}</a>
      break;
    case 'none':
    return <span {...props}>{props.children}</span>
      break;
    default: return <span {...props}>{props.children}</span>
  }
}
