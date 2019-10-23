import React, { Component } from "react";

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }

  render() {
    const { placeholder, height, alt } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "placeholder");

    return (
      <span>
        <img
          className="w-100  image"
          style={{ height: `${height}px` }}
          alt={alt}
          src={this.props.src}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
        />
        <img
          className="image__loading"
          alt={alt}
          src={placeholder}
          {...(highResImageLoaded
            ? {
                style: { height: `${height}px`, opacity: "0" }
              }
            : {
                style: { height: `${height}px` }
              })}
        />
      </span>
    );
  }
}
