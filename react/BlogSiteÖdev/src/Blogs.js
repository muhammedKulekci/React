import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

export default class Blogs extends Component {
  render() {
    return (
      <>
        <h2>
          <h2 style={{ marginTop: "50px" }}>{this.props.currentCategory}</h2>
        </h2>
        {this.props.blogs.map((blog) => (
          <Card style={{ margin: "20px" }}>
            <Container>
              <Row>
                <Col xs="3">
                  <CardImg width="100%" src={blog.image} alt={blog.blogName} />
                </Col>
                <Col xs="9">
                  <CardBody>
                    <CardTitle>{blog.blogName}</CardTitle>
                    <CardText>{blog.desc}</CardText>
                  </CardBody>
                </Col>
              </Row>
            </Container>
          </Card>
        ))}
      </>
    );
  }
}
