import React, { Component } from "react";
import Categories from "./Categories";
import Header from "./Header";
import Products from "./Products";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import CardDetail from "./CardDetail";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Profiles from "./Profiles";

export default class App extends Component {
  state = {
    products: [],
    currentText: "",
    card: [],
    email: "",
    password: "",
    select: "",
    selectMulti: "",
    text: "",
    // selectedFile: null,
  };

  onClick = (event) => {
    event.preventDefault();

    alertify.success(this.state.email + " Login Succcesful", 2);
  };
  onChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  removeToCard = (product) => {
    let newCard = this.state.card.filter((c) => c.product.id !== product.id);
    this.setState({ card: newCard });
    alertify.error(product.productName + " added to card!", 2);
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
  addToCard = (product) => {
    let newCard = this.state.card;
    var addedItem = newCard.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCard.push({ product: product, quantity: 1 });
    }
    this.setState({ card: newCard });
    alertify.success(product.productName + " added to card!", 2);
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Header card={this.state.card} removeToCard={this.removeToCard} />
            <Col xs="3">
              <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Products
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      addToCard={this.addToCard}
                    />
                  }
                />
                <Route
                  path="/cardDetail"
                  element={
                    <CardDetail
                      card={this.state.card}
                      removeToCard={this.removeToCard}
                    />
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Contact
                      onClick={this.onClick}
                      email={this.props.email}
                      onChange={this.onChange}
                    />
                  }
                />
                <Route
                  path="/profiles"
                  element={
                    <Profiles
                      email={this.state.email}
                      selectedFile={this.state.selectedFile}
                    />
                  }
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
