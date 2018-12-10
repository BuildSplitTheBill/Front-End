import React from "react";

const BalancesDetails = props => {
  return (
    <React.Fragment>
      <div className="balances-column">
        <h3 className="red-header">You Owe</h3>

        <div className="list you-owe">
          <ul>
            <li>
              Jim Jolly: <span className="red">$32.65</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="balances-column">
        <h3 className="green-header">You Are Owed</h3>
        <div className="list you-are-owed">
          <ul>
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
