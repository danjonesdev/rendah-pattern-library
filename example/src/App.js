import React, { Component } from "react";

import { Card } from "rendah-pattern-library";
import { Button } from "rendah-pattern-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <Card image={null} title={null} description={null} link={null} />
        <Button
          type={"button"}
          text={"Click here"}
          icon={"facebook"}
          color={"color"}
        />
      </div>
    );
  }
}
