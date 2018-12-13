import React from "react";
import BalanceBar from "../components/BalanceBar";
import BillsList from "../components/BillsList";

const BillsView = props => {
  return (
    <React.Fragment>
      <BalanceBar balancesData={props.balancesData} />
      <div className="bills-page">
        <BillsList bills={props.bills} />
      </div>
    </React.Fragment>
  );
};

export default BillsView;
