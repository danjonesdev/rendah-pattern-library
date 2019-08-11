import React, { Component } from "react";

import CardPreview from './pattern-library/modules/card';
import ButtonPreview from './pattern-library/elements/button';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <CardPreview />
        <ButtonPreview />
      </div>
    );
  }
}
