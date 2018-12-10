import React from "react";

const BalanceBar = props => {
  return (
    <div className="balances-bar">
      <div className="totals">
        <h4>
          Total Owed: <span className="red">$32.65</span>
        </h4>
      </div>
      <div className="totals">
        <h4>
          Total You Are Owed: <span className="green">$132.65</span>
        </h4>
      </div>
      <div className="totals">
        <h4>
          Total Balance: <span className="green">$100.00</span>
        </h4>
      </div>
    </div>
  );
};

export default BalanceBar;
