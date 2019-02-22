import React, { Component } from "react";

class HogDescription extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.hogObject.greased ? "true" : "false"}</h4>
        <h4>{this.props.hogObject.specialty}</h4>
        <h4>{this.props.hogObject.weight}</h4>
        <h4>{this.props.hogObject.medal}</h4>
      </div>
    );
  }
}

export default HogDescription;
