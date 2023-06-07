import React, { Component } from "react";
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import { Row } from "reactstrap";
import MultiplyCounter from "./components/MultiplyCounter";
import DivideCounter from "./components/DivideCounter";
import MultiplyValue from "./components/MultiplyValue";

export default class App extends Component {
  render() {
    return (
      <>
        <Row>
          <Counter />
          <MultiplyValue />
          <IncreaseCounter />
          <DecreaseCounter />
          <IncreaseByTwoCounter />
          <MultiplyCounter />
          <DivideCounter />
        </Row>
      </>
    );
  }
}
