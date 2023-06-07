import React, { Component } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Navbar from "./Navbar";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    products: [],
    currentCategory: "",
  };

  chanceCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <Container>
        <Navbar />
        <Row>
          <Col xs="3">
            <Categories
              chanceCategory={this.chanceCategory}
              currentCategory={this.state.currentCategory}
            />
          </Col>

          <Col xs="9">
            <Products
              products={this.state.products}
              currentCategory={this.state.currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
