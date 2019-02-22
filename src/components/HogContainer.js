import React, { Component } from "react";
import Hog from "./Hog";
import hogs from "../porkers_data";

class HogContainer extends Component {
  hogIterator = () => {
    return hogs.map(hog => <Hog hogObject={hog} />);
  };

  render() {
    console.log(this.hogIterator);
    return <div className="hog-container">{this.hogIterator()}</div>;
  }
}

export default HogContainer;
