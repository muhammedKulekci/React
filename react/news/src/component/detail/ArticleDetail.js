import React, { Component } from "react";

import { Card, CardBody, CardImg, CardTitle, CardGroup, Col } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ArticleDetail extends Component {
  render() {
    console.log(this.props.article);
    return (
      <div>
        <CardGroup>
          <Col xs="4">
            <Card
              style={{ marginLeft: "10px", marginRight: "10px" }}
              key={this.props.article.id}
            >
              <CardImg
                top
                width="100%"
                src={this.props.article.image}
                alt={this.props.article.title}
              />
              <CardBody>
                <CardTitle>
                  <Link to={"/articledetail/" + this.props.articles.id}>
                    {this.props.article.title}
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </CardGroup>
      </div>
    );
  }
}
function getArticleById(articles, id) {
  let article = articles.find((article) => article.id == id) || null;
  return article;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const article = getArticleById(state.articleListReducer, 1);
  return {
    article,
    articles: state.articleListReducer,
  };
}

export default connect(mapStateToProps)(ArticleDetail);
