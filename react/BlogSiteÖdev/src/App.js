import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Blogs from "./Blogs";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AddCategory from "./AddCategory";
import axios from "axios";
import Login from "./Login";
import AddBlog from "./AddBlog";

export default class App extends Component {
  state = {
    blogs: [],
  };

  getBlogs = (categoryId) => {
    let url = "http://localhost:3000/blogs";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    axios.get(url).then((res) => this.setState({ blogs: res.data }));
  };

  componentDidMount() {
    const url = "http://localhost:3000/blogs";

    axios.get(url).then((res) => this.setState({ blogs: res.data }));
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getBlogs(category.id);
  };

  render() {
    return (
      <>
        <Container>
          <Header
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
          />
          <Row>
            <Col>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Blogs
                      blogs={this.state.blogs}
                      currentCategory={this.state.currentCategory}
                    />
                  }
                ></Route>
                <Route
                  path="/addCategory"
                  element={<AddCategory blogs={this.state.blogs} />}
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/addBlog"
                  element={<AddBlog blogs={this.state.blogs} />}
                ></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
