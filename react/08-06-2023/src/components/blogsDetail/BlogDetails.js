import React, { Component } from "react";
import { connect } from "react-redux";

export class BlogDetails extends Component {
  render() {
    console.log(this.props.blog);
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    blog: state.blogReducer,
  };
}

export default connect(mapStateToProps)(BlogDetails);
