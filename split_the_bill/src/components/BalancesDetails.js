import React from "react";

const BalancesDetails = props => {
  return (
    <React.Fragment>
      <div className="balances-column">
        <h3 className="red-header">You Owe</h3>

        <div className="list you-owe">
          <ul>
            {/* {props.variable.map(key => (
              <li>
                {key.name} <span className="red">{key.amount}</span>
              </li>
            ))} */}
            <li>
              Jim Jolly: <span className="red">$32.65</span>{" "}
              <button className="pay-btn">Pay</button>
            </li>
          </ul>
        </div>
      </div>

      <button className="pay-all-btn">Pay All</button>

      <div className="balances-column">
        <h3 className="green-header">You Are Owed</h3>
        <div className="list you-are-owed">
          <ul>
            {/* {props.variable.map(key => (
              <li>
                {key.name} <span className="green">{key.amount}</span>
              </li>
            ))} */}
            <li>
              Chris Mowry: <span className="green">$132.65</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BalancesDetails;
