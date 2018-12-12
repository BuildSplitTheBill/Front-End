import React from "react";
import { Link } from "react-router-dom";

const BillsList = props => {
  return (
    <div className="bills-list">
      <h2>Bills</h2>
      <table>
        <tbody>
          {/* {props.bills.map(bill => (
            <tr>
            <td className="date">bill.{bill.date}</td>
            <td className="description">{bill.description}</td>
            <td>
              <span className="lighter-text">{bill.paid} paid </span> $65.30
            </td>
            <td className="right-column">
              <span className="lighter-text">{bill.paid} lent you </span>
              <span className="red">{bill.amount}</span>{" "}
              <button className="pay-btn">Pay</button>
              <Link to="/bills/bill">
                <button className="view-btn">View</button>
              </Link>
            </td>
          </tr>
          ))} */}
          <tr>
            <td className="date">7/3/18</td>
            <td className="description">Chicago Hotel</td>
            <td>
              <span className="lighter-text">Jim Jolly paid </span> $65.30
            </td>
            <td className="right-column">
              <span className="lighter-text">Jim lent you </span>
              <span className="red">$32.65</span>{" "}
              <button className="pay-btn">Pay</button>
              <Link to="/bills/bill">
                <button className="view-btn">View</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="date">10/13/18</td>
            <td className="description">Southwest ticket to Las Vegas</td>
            <td>
              <span className="lighter-text">You paid </span>
              $265.30
            </td>
            <td className="right-column">
              <span className="lighter-text">Crhis Mowry owes you </span>{" "}
              <span className="green">$132.65</span>
              <Link to="/bills/bill">
                <button className="view-btn">View</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillsList;
