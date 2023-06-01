import React, { Component } from "react";

export default class Profiles extends Component {
  render() {
    return (
      <div>
        <p>{this.props.email}</p>

        {this.props.selectedFile && (
          <img src={this.props.selectedFile} alt="Profile Image" />
        )}
      </div>
    );
  }
}
