import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveArticle } from "../../redux/actions/articleActions";
import NewsDetail from "./NewsDetail";

function AddOrUpdateNews({
  articles,
  categories,
  getArticles,
  getCategories,
  saveArticle,
  history,
  ...props
}) {
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
      [name]: name === "category_Id" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "name" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        name: "Ürün ismi olmalıdır",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        name: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveArticle(article).then(() => {
      history.push("/");
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

export function getArticleById(articles, Id) {
  let article = articles.find((article) => article.id == Id) || null;
  return article;
}

function mapStateToProps(state, ownProps) {
  const Id = ownProps.match.params.Id;
  const article =
    Id && state.articleListReducer.length > 0
      ? getArticleById(state.articleListReducer, Id)
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
