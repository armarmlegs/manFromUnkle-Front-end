import React, { Component } from "react";
import "./text.css";
import withToolTip from "./withToolTip"; // HOC importée et qui contient toute la logique

// creating the initial component, a simple text div, this component will be the argument in the higher order component withToolTip,
// the behavior is that when the mouse enter a explicative text will appear underneath the initial div,
// likewise on mouseLeave will make the explicative text disappear.

class Text extends Component {
  render() {
    return (
      <div>
        <input />
        <div>{this.props.showToolTip && <p> please enter your name here </p>}</div>
      </div>
    );
  }
}

export default withToolTip(Text);
