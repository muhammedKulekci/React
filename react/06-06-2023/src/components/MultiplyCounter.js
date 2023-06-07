import React, { Component } from "react";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { multiplyCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class MultiplyCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="info"
          onClick={(e) => this.props.dispatch(multiplyCounter())}
        >
          Multiply
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(multiplyCounter, dispatch) };
}

export default connect(mapDispatchToProps)(MultiplyCounter);
