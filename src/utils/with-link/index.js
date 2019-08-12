import React from 'react'
import { Link } from 'react-router-dom';

/**
 * A Button indicates a possible user action.
 */

export default function WithLink(props) {
  const {
    withLinkProps
  } = props

  if (!withLinkProps) return <span {...props}>{props.children}</span>;

  switch (withLinkProps.type) {
    case 'internal':
    return <Link target={withLinkProps.target} to={withLinkProps.url} {...props}>{props.children}</Link>
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
