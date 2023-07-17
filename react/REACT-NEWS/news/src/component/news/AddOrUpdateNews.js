import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveArticle } from "../../redux/actions/articleActions";
import NewsDetail from "./NewsDetail";
import { useNavigate } from "react-router-dom";

function AddOrUpdateNews({
  articles,
  categories,
  getArticles,
  getCategories,
  saveArticle,
  history,
  ...props
}) {
  console.log("elma");
  const [article, setArticle] = useState({ ...props.article });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setArticle({ ...props.article });
  }, [props.article]);

  function handleChange(event) {
    const { name, value } = event.target;
    setArticle((previousArticle) => ({
      ...previousArticle,
      [name]: name === "id" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "articleName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        articleName: "Ürün ismi olmalıdır",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        articleName: "",
      }));
    }
  }
  const navigate = useNavigate();
  function handleSave(event) {
    event.preventDefault();
    saveArticle(article).then(() => {
      navigate("/");
    });
  }

  return (
    <NewsDetail
      article={article}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getArticleById(articles, articleId) {
  let article = articles.find((article) => article.id == articleId) || null;
  return article;
}

function mapStateToProps(state, ownProps) {
  const articleId = 0;
  const article =
    articleId && state.articleListReducer.length > 0
      ? getArticleById(state.articleListReducer, articleId)
      : {};
  return {
    article,
    articles: state.articleListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateNews);
