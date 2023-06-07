import React, { Component } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button,
} from "reactstrap";
import axios from "axios";

export default class AddCategory extends Component {
  state = {
    title: "",
  };

  handleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;

    axios
      .post("http://localhost:3000/categories", { categoryName: title })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col xs="3"></Col>
            <Col xs="4">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Category:
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="text"
                      id="exampleText"
                      value={title}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col xs="4">
              <Button type="submit">Add Category</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
