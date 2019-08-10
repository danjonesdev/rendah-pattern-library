import React, { Component } from "react";

import { Card } from "rendah-pattern-library";

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
        <Card image={null} title={null} description={null} link={null} />
        <ButtonPreview />
      </div>
    );
  }
}
