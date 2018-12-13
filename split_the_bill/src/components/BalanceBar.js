import React from "react";

const BalanceBar = props => {
  return (
    <div className="balances-bar">
      <div className="totals">
        <h4>
          Total Owed:
          <span className="red">{`  $${
            props.balancesData.amountUserOwes
          }`}</span>
        </h4>
      </div>
      <div className="totals">
        <h4>
          Total You Are Owed:
          <span className="nav-green">{`  $${
            props.balancesData.amountUserIsOwed
          }`}</span>
        </h4>
      </div>
      <div className="totals">
        <h4>
          Balance:
          <span className="nav-green">{`  $${
            props.balancesData.balance
          }`}</span>
        </h4>
      </div>
    </div>
  );
};

export default BalanceBar;
