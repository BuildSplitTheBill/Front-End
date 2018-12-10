import React from "react";
import BalanceBar from "../components/BalanceBar";
import BillsList from "../components/BillsList";

const BillsView = props => {
  return (
    <div className="bills-page">
      <BalanceBar />
      <BillsList />
    </div>
  );
};

export default BillsView;
