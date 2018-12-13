import React from "react";
import BalancesView from "./BalancesView";

const HomeView = props => {
  return <BalancesView balancesData={props.balancesData} />;
};

export default HomeView;
