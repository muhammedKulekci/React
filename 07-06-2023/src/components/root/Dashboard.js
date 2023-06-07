import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Categories from "../categories/Categories";
import Products from "../products/Products";

import { Route, Routes } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Categories />
          </Col>
          <Col xs="9">
            <Routes>
              <Route path="/" element={<Products />}></Route>
            </Routes>
          </Col>
        </Row>
      </div>
    );
  }
}
