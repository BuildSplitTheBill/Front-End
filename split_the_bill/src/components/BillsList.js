import React from "react";
import { Link } from "react-router-dom";

const BillsList = props => {
  console.log("bills", props.bills);
  console.log("billsUserIsOwed", props.bills.billsUserIsOwed);
  console.log("billsUserOwes", props.bills.billsUserOwes);

  return (
    <div className="bills-list">
      <h2>Bills</h2>
      <table>
        <tbody>
          {props.bills.billsUserIsOwed.length === 0
            ? null
            : props.bills.billsUserIsOwed.map(bill => (
                <tr>
                  <td className="date">{bill.date}</td>
                  <td className="description">{bill.description}</td>
                  <td>
                    <span className="lighter-text">{bill.name} paid </span> $
                    {bill.amount}
                  </td>
                  <td className="right-column">
                    <span className="lighter-text">{bill.name} lent you </span>
                    <span className="green">${bill.amount}</span>{" "}
                    <Link to="/bills/bill">
                      <button className="view-btn">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <table>
        <tbody>
          {props.bills.billsUserOwes.length === 0
            ? null
            : props.bills.billsUserOwes.map(bill => (
                <tr>
                  <td className="date">{bill.date}</td>
                  <td className="description">{bill.description}</td>
                  <td>
                    <span className="lighter-text">{bill.name} paid </span> $
                    {bill.amount}
                  </td>
                  <td className="right-column">
                    <span className="lighter-text">{bill.name} lent you </span>
                    <span className="red">${bill.amount}</span>{" "}
                    <button className="pay-btn">Pay</button>
                    <Link to="/bills/bill">
                      <button className="view-btn">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillsList;
