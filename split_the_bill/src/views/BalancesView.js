import React from "react";

import BalanceBar from "../components/BalanceBar";
import BalancesDetails from "../components/BalancesDetails";

const BalancesView = props => {
  return (
    <React.Fragment>
      <BalanceBar balancesData={props.balancesData} />
      <div className="balances-page">
        <BalancesDetails balancesData={props.balancesData} />
      </div>
    </React.Fragment>
  );
};

export default BalancesView;
