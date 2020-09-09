import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart-o";
    if (this.props.liked) {
      classes = "fa fa-heart";
    }

    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
