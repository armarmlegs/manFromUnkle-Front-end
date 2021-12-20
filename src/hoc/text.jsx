import React, { Component } from "react";
import withToolTip from "./withToolTip"; // HOC importée et qui contient toute la logique

// creating the initial component, a simple text div, this component will be the argument in the higher order component withToolTip,
// the behavior is that when the mouse enter a explicative text will appear underneath the initial div,
// likewise on mouseLeave will make the explicative text disappear.

class Text extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <input />

          {/* si la valeur de showToolTip est truthy, le paragraphe "p" apparaitras sous l'input */}
        </div>
        {this.props.showToolTip && <p>Paste Git Repo Url </p>}
      </div>
    );
  }
}

export default withToolTip(Text);
