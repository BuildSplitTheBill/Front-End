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
            <span className="lighter-text">You paid Jim Jolly </span> $65.30
          </td>
        </tr>
        <tr>
          <td>10/13/18</td>
          <td>Southwest ticket to Las Vegas</td>
          <td>
            <span className="lighter-text">Crhis Mowry paid you</span>
            $132.65
          </td>
        </tr>
      </table>
    </div>
  );
};

export default HistoryList;
