import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardGroup, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as articleActions from "../../redux/actions/articleActions";
import { Link } from "react-router-dom";

class News extends Component {
  componentDidMount() {
    this.props.actions.getArticles();
  }

  render() {
    console.log(this.props.articles);
    return (
      <div>
        <h3>
          <h2>{this.props.currentCategory.name}</h2>
        </h3>
        <CardGroup>
          {this.props.articles.map((article) => (
            <Col xs="4" key={article.category_id}>
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
                key={article.id}
              >
                <CardImg
                  top
                  width="100%"
                  src={article.image}
                  alt={article.title}
                />
                <CardBody>
                  <CardTitle>
                    <Link to={"/articledetail/" + article.id}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    articles: state.articleListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getArticles: bindActionCreators(articleActions.getArticles, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
