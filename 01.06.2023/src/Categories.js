import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
  state = {
    categories: [],
  };
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  componentDidMount() {
    this.getCategories();
  }
  render() {
    return (
      <ListGroup>
        {this.state.categories.map((category) => (
          <ListGroupItem
            active={
              category.categoryName === this.props.currentCategory
                ? true
                : false
            }
            key={category.id}
            onClick={() => this.props.changeCategory(category)}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
