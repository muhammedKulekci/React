import React, { Component } from "react";
import { multiplyValue } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class MultiplyValue extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(e) => this.props.dispatch(multiplyValue(e.target.value))}
        ></input>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(multiplyValue, dispatch) };
}

export default connect(mapDispatchToProps)(MultiplyValue);
