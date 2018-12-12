import React from "react";
import BalanceBar from "../components/BalanceBar";
import BillsList from "../components/BillsList";

const BillsView = props => {
  return (
    <React.Fragment>
      <BalanceBar />
      <div className="bills-page">
        <BillsList />
      </div>
    </React.Fragment>
  );
};

export default BillsView;
