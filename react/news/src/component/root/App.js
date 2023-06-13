import React from "react";
import Header from "../navi/Header";
import Categories from "../categories/Categories";
import News from "../news/News";
import ArticleDetail from "../detail/ArticleDetail";
import AddOrUpdateNews from "../news/AddOrUpdateNews";
import NotFound from "../common/NotFound";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <Categories />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/articledetail/:id" element={<ArticleDetail />} />
        <Route path="/savearticle/:id" component={AddOrUpdateNews} />
        <Route path="/savearticle" component={AddOrUpdateNews} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
