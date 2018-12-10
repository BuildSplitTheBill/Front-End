import React from "react";

const BillsList = props => {
  return (
    <div className="bills-list">
      <h2>Bills</h2>
      <table>
        <tr>
          <td>7/3/18</td>
          <td>Chicago Hotel</td>
          <td>
            <span className="lighter-text">Jim Jolly paid </span> $65.30
          </td>
          <td>
            <span className="lighter-text">Jim lent you </span>
            $32.65
          </td>
        </tr>
        <tr>
          <td>10/13/18</td>
          <td>Southwest ticket to Las Vegas</td>
          <td>
            <span className="lighter-text">You paid </span>
            $265.30
          </td>
          <td>
            <span className="lighter-text">Crhis Mowry owes you </span>
            $132.65
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BillsList;
