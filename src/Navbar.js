import React, { Component } from "react";
import image from "./foto1.jpg";
import Products from "./Products";

export default class Navbar extends Component {
  state = {
    navLinks: [
      { title: "Hesabım", url: "/" },
      { title: "Favorilerim", url: "/Favorilerim" },
    ],
  };

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={image} style={{ width: 100 }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              {this.state.navLinks.map((link, index) => (
                <li class="nav-item" key={index}>
                  <a class="nav-link" href={link.url}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sepetim -{this.props.card.length}
                </a>
                <ul class="dropdown-menu">
                  {this.props.card.map((cardItem) => (
                    <li key={cardItem.product.id}>
                      <a class="dropdown-item" href="#">
                        {cardItem.product.productName}({cardItem.quantity})
                        <span
                          className="badge badge-warning"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "red",
                          }}
                          onClick={() =>
                            this.props.removeToCard(cardItem.product)
                          }
                        >
                          Sil
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
