import React, { Component } from "react";

import HeroPreview from './pattern-library/modules/hero';
import CardPreview from './pattern-library/modules/card';
import ButtonPreview from './pattern-library/elements/button';
import IconPreview from './pattern-library/elements/icon';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <HeroPreview />
        <CardPreview />
        <ButtonPreview />
        <IconPreview />
      </div>
    );
  }
}
