import React from "react";
import { Table } from "reactstrap";

export default class CardDetail extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.card.map((cardd, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{cardd.product.categoryId}</td>
              <td>{cardd.product.productName}</td>
              <td>{cardd.quantity}</td>
              <td>
                <span
                  className="btn btn-danger"
                  style={{
                    marginRight: "10px",
                    backgroundColor: "red",
                  }}
                  onClick={() => this.props.removeToCard(cardd.product)}
                >
                  Remove
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
