import * as actionTypes from "./actionTypes";

export function getBlogsSuccess(blogs) {
  return { type: actionTypes.GET_BLOGS_SUCCESS, payload: blogs };
}
export function openBlog(openBlog) {
  return { type: actionTypes.OPEN_BLOG, payload: openBlog };
}

export function getBlogs(category) {
  return function (dispatch) {
    let url = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
    if (category) {
      url = url + "?source=" + category;
    }
    return fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: "apikey 2GoKrWOQLPuLGXkyeqtQ41:2wqCam7ibgDYbTwhtSTnVX",
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(getBlogsSuccess(data.result)));
  };
}
