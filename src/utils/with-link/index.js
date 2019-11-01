import React from "react";
// const Link = 'Link'

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const { withLinkProps } = props;
  if (!withLinkProps) return <div {...props}>{props.children}</div>;
  const RouterLink = withLinkProps.routerLink;

  switch (withLinkProps.type) {
    case "internal":
      if (RouterLink) {
        return (
          <RouterLink
            className="link"
            target={withLinkProps.target || "_top"}
            to={withLinkProps.url}
            {...props}
          >
            {props.children}
          </RouterLink>
        );
      }
      break;
    case "external":
      return (
        <a
          className="link"
          target={withLinkProps.target || "_top"}
          href={withLinkProps.url}
          {...props}
        >
          {props.children}
        </a>
      );
      break;
    case "none":
      return <div {...props}>{props.children}</div>;
      break;
    default:
      return <div {...props}>{props.children}</div>;
  }
}
