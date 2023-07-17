import React, { Component } from "react";

import "./CustomersList.css";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "982-014",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 2,
        name: "Alex",
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 3,
        name: "James",
        phone: "380-944",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Alen",
        phone: "142-034",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Marty",
        address: { city: "Paris" },
        photo: "https://picsum.photos/id/1015/60",
      },
    ],
  };
  render() {
    return (
      <>
        <h4 className="border-bottom m-1 p-3">
          {this.state.pageTitle}
          {/* expression{} rendered dynamically using state */}
          &nbsp;
          <span className="badge bg-primary">{this.state.customersCount}</span>
          &nbsp;
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustRow()}</tbody>
        </table>
      </>
    );
  }
  /**
   * onRefreshClick(){
    //console.log("Refreshed");
    this.setState({
      customersCount: 7,
    });
    in a normal method this refers to button so use arrow func

   */
  custNameStyle = (custName) => {
    if (custName.startsWith("A")) return "blue-highlight";
    else if (custName.startsWith("J")) return "red-highlight";
    else {
      return "";
    }
  };
  onRefreshClick = () => {
    //console.log("Refreshed");
    this.setState({
      customersCount: 7,
    });
  };
  getCustRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            {" "}
            <img src={cust.photo} />
            <>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.onchangePicture(cust, index);
                }}
              >
                Change Picture
              </button>
            </>
          </td>

          <td className={this.custNameStyle(cust.name)}>{cust.name}</td>
          {/*<td>{cust.name}</td>*/}
          <td>{this.getCustPhone(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  getCustPhone = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No phone</div>
    );
  };
  onchangePicture = (cust, index) => {
    //console.log(cust);
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";
    this.setState({ customers: custArr });
  };
}
