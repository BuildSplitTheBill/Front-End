import React from "react";

const BillPage = props => {
  return (
    <div className="bill-page">
      <h2 className="h2-header">Chicago Hotel</h2>
      <div className="form-container">
        <form>
          <div className="form-input">
            <p>Description: &nbsp;</p>
            <input type="text" name="name" defaultValue="Chicago Hotel" />
          </div>

          <div className="form-input">
            <p>Date: &nbsp;</p>
            <input type="date" name="date" defaultValue="7/3/18" />
          </div>

          <div className="form-input">
            <p>Amount: &nbsp;</p>
            <input type="number" name="amount" defaultValue="$65.30" />
          </div>

          <div className="form-input">
            <p>People: &nbsp;</p>
            <input type="text" name="people" />
          </div>

          <div className="form-input">
            <p>Who Paid: &nbsp;</p>
            <select>
              <option>Tommy Huynh</option>
              <option defaultValue>Jim Jolly</option>
              <option>Chris Mowry</option>
            </select>
          </div>

          <button>Update</button>
          <button className="delete-btn">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default BillPage;
