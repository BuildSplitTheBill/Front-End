import React from "react";

const HistoryList = props => {
  return (
    <div className="history-list">
      <h2>History</h2>
      <table>
        <tr>
          <td>7/17/18</td>
          <td>Chicago Hotel</td>
          <td>
            <span>You paid Jim Jolly </span>{" "}
            <span className="red"> $65.30</span>
          </td>
        </tr>
        <tr>
          <td>10/13/18</td>
          <td>Southwest ticket to Las Vegas</td>
          <td>
            <span>Chris Mowry paid you </span>
            <span className="green"> $132.65</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default HistoryList;
