import React, { Component } from "react";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { divideCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class DivideCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="info"
          onClick={(e) => this.props.dispatch(divideCounter())}
        >
          DivideByTwo
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(divideCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DivideCounter);
