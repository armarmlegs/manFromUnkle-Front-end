import React, { Component } from "react";
import withToolTip from "./withToolTip"; // HOC importée et qui contient toute la logique


//creation du component initial, une simple div, ce componenet sera l'argument de notre function withtooltip.


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
