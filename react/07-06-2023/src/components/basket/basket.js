import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";

class Basket extends Component {
  render() {
    var totalPrice = 0;
    this.props.cart.map(
      (cartItem) => (totalPrice += cartItem.product.price * cartItem.quantity)
    );
    return (
      <div>
        <br></br>
        <div className="card-wrapper" />
        <div className="form-container active">
          <form action>
            <input
              placeholder="Kredi Kartı Numarası"
              type="tel"
              name="number"
            />
            <input placeholder="Ad Soyad" type="text" name="name" />
            <input placeholder="AA/YY" type="tel" name="expiry" />
            <input placeholder="CVC" type="number" name="cvc" />
          </form>
        </div>
        <br></br>

        <div>{totalPrice} TL</div>

        <Button onClick={""} color="success">
          Pay
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(Basket);
