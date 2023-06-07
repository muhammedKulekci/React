import React from "react";
import { Container } from "reactstrap";
import Header from "../navi/Header";
import Dashboard from "./Dashboard";
import Basket from "../basket/basket";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/Detail";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
