import React from "react";

import BalanceBar from "../components/BalanceBar";
import BalancesDetails from "../components/BalancesDetails";

const BalancesView = props => {
  return (
    <React.Fragment>
      <BalanceBar />
      <div className="balances-page">
        <BalancesDetails />
      </div>
    </React.Fragment>
  );
};

export default BalancesView;
