import React, { Component } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Navbar from "./Navbar";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    products: [],
    currentCategory: "",
    card: [],
  };

  chanceCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  addToCard = (product) => {
    let newCard = this.state.card;
    var addedItem = newCard.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCard.push({ product: product, quantity: 1 });
    }
    this.setState({ card: newCard });
  };

  removeToCard = (product) => {
    let newCard = this.state.card.filter((c) => c.product.id !== product.id);
    this.setState({ card: newCard });
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
        <Navbar card={this.state.card} removeToCard={this.removeToCard} />
        <Row>
          <Col xs="3">
            <Categories
              chanceCategory={this.chanceCategory}
              currentCategory={this.state.currentCategory}
            />
          </Col>

          <Col xs="9">
            <Products
              addToCard={this.addToCard}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
