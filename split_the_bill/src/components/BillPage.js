import React from "react";

const BillPage = props => {
  return (
    <div className="bill-page">
      <h2 className="h2-header">Chicago Hotel</h2>
      <div className="form-container">
        <form>
          <div className="form-input">
            <h4>Description: &nbsp;</h4>
            <input type="text" name="name" defaultValue="Chicago Hotel" />
          </div>

          <div className="form-input">
            <h4>Date: &nbsp;</h4>
            <input type="date" name="date" defaultValue="7/3/18" />
          </div>

          <div className="form-input">
            <h4>Amount: &nbsp;</h4>
            <input type="number" name="amount" defaultValue="$65.30" />
          </div>

          <div className="form-input">
            <h4>People: &nbsp;</h4>
            <input type="text" name="people" />
          </div>

          <div className="form-input">
            <h4>Who Paid: &nbsp;</h4>
            <select>
              <option>Tommy Huynh</option>
              <option defaultValue>Jim Jolly</option>
              <option>Chris Mowry</option>
            </select>
          </div>

          {/* <button>Update</button>
          <button className="delete-btn">Delete</button> */}
        </form>
      </div>
    </div>
  );
};

export default BillPage;
