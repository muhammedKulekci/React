import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardGroup,
  Col,
} from "reactstrap";

export default class Products extends Component {
  render() {
    return (
      <>
        <h2>{this.props.currentCategory}</h2>
        <CardGroup>
          {this.props.products.map((product) => (
            <Col xs="3">
              <Card style={{ margin: "10px" }}>
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle>{product.productName}</CardTitle>

                  <CardText>{product.desc}</CardText>
                  <Button onClick={() => this.props.addToCard(product)}>
                    Satın Al
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </>
    );
  }
}
