import * as actionTypes from "./actionTypes";

export function getArticlesSuccess(articles) {
  return { type: actionTypes.GET_ARTICLES_SUCCESS, payload: articles };
}
export function updateArticleSuccess(article) {
  return { type: actionTypes.UPDATE_ARTICLE_SUCCESS, payload: article };
}

export function createArticleSuccess(article) {
  return { type: actionTypes.CREATE_ARTICLE_SUCCESS, payload: article };
}

export function saveArticleApi(article) {
  return fetch("http://localhost:3000/articles/" + (article.id || ""), {
    method: article.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(article),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveArticle(article) {
  return function (dispatch) {
    return saveArticleApi(article)
      .then((savedArticle) => {
        article.id
          ? dispatch(updateArticleSuccess(savedArticle))
          : dispatch(createArticleSuccess(savedArticle));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}

export function getArticles(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/articles";
    if (categoryId) {
      url = url + "?category_id=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getArticlesSuccess(data)));
  };
}
