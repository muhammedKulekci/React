import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";
import axios from "axios";
//BU METOT ÇALIŞMIYORRRR, HAZIR ALINMIŞTIRRRRR

export default class AddBlog extends Component {
  state = {
    title: "",
    category: "",
    text: "",
    file: null,
    categories: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => this.setState({ categories: res.data }));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, category, text, file } = this.state;

    const apiUrl = "http://localhost:3000/blogs";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("text", text);
    formData.append("file", file);

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Blog successfully added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
      });

    this.setState({
      title: "",
      category: "",
      text: "",
      file: null,
    });
  };

  render() {
    const { title, category, text } = this.state;

    return (
      <>
        <Container>
          <Form style={{ marginTop: "50px" }} onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="title" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="category" sm={2}>
                Category
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="category"
                  id="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  {this.state.categories.map((category) => (
                    <option key={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="text" sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="text"
                  id="text"
                  value={text}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="file" sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.handleFileChange}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit">Add Blog</Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </>
    );
  }
}
