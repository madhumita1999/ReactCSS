import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    Products: [
      { id: 1, name: "abc", price: 10.0 },
      { id: 2, name: "def", price: 20.0 },
      { id: 3, name: "ghi", price: 30.0 },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <table className="table  table-bordered border-primary">
              <thead>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Net Price</th>
              </thead>
              <tbody>{this.getProductRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  getProductRow = () => {
    return this.state.Products.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td className="d-block m-3 p-3 custom-border">
            {prod.price.toFixed(2)}
          </td>
          <td>
            <input
              type="text"
              className="d-block m-3 p-3 custom-border"
              {/*onChange={(e) => {
                changeQuantity(e.target.value);
              }}*/}
            ></input>
          </td>
          <td></td>
        </tr>
      );
    });
  };
 /* changeQuantity = (e) => {
    return this.setState(e);
  };*/
}
