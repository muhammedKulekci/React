import React, { useEffect } from "react";
import * as articleActions from "../../redux/actions/articleActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const ArticleDetail = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.actions.getArticles();
  }, []);

  const article = getArticleById(props.articles, id);

  return (
    <div>
      <Card
        style={{
          width: "%100",
        }}
      >
        <img
          alt="Card"
          src={article.image}
          className="center"
          width="%75"
          height="300"
        />
        <CardBody flush>
          <CardTitle tag="h5">{article.title}</CardTitle>
          <CardText>{article.desc}</CardText>
        </CardBody>
      </Card>
            
    </div>
  );
};

function getArticleById(articles, id) {
  let article = articles.find((article) => article.id == id) || null;
  return article;
}

function mapStateToProps(state) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
