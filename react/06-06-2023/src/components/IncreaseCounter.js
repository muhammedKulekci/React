import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={(e) => this.props.dispatch(increaseCounter())}
        >
          Increase
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
