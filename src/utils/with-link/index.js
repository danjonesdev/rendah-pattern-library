import React, { useState } from "react";

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const [canRedirect, setCanRedirect] = useState(false);
  const { withLinkProps } = props;
  if (!withLinkProps) return <div {...props}>{props.children}</div>;
  const RouterRedirect = withLinkProps.routerLink;

  const handleRouterRedirect = () => {
    if (canRedirect) return <RouterRedirect push to={withLinkProps.url} />;
    return false;
  };

  switch (withLinkProps.type) {
    case "internal":
      if (RouterRedirect) {
        return (
          <React.Fragment>
            <div className="link" onClick={handleRouterRedirect} {...props}>
              {props.children}
            </div>
            {redirect()}
          </React.Fragment>
        );
      }
      break;
    case "external":
      return (
        <a
          className="link"
          target={withLinkProps.target || "_self"}
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
