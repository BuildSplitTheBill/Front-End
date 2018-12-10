import React from "react";

const SettleBalances = props => {
  return (
    <div className="settlement-page">
      <div className="pay-all">
        <button>Pay All</button>
      </div>
      <div className="settlement">
        <h4>
          Pay Jim Jolly <span className="red">$32.65</span>{" "}
        </h4>
        <button>Pay</button>
      </div>
    </div>
  );
};

export default SettleBalances;
