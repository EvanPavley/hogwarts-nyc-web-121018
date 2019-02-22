import React, { Component } from "react";
import HogDescription from "./HogDescription";

class Hog extends Component {
  state = {
    descriptionShown: false
  };

  getImg = hogName => {
    let hogArr = hogName.toLowerCase().split(" ");
    return `/hog-imgs/${hogArr.join("_")}.jpg`;
  };

  clickHandler = () => {
    this.state.descriptionShown
      ? this.setState({ descriptionShown: false })
      : this.setState({ descriptionShown: true });
  };

  render() {
    let urlstring = this.getImg(this.props.hogObject.name);
    return (
      <div className="hog-card">
        <h1>{this.props.hogObject.name}</h1>
        <img
          onClick={this.clickHandler}
          className="hog-image"
          src={process.env.PUBLIC_URL + urlstring}
        />
        {this.state.descriptionShown ? (
          <HogDescription hogObject={this.props.hogObject} />
        ) : null}
      </div>
    );
  }
}
//
export default Hog;
