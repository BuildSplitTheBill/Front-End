import React from "react";

import BalanceBar from "../components/BalanceBar";
import BalancesDetails from "../components/BalancesDetails";

const BalancesView = props => {
  return (
    <div className="balances-page">
      <BalanceBar />
      <BalancesDetails />
    </div>
  );
};

export default BalancesView;
