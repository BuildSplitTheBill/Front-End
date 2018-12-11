import React from "react";

const AddBillForm = props => {
  return (
    <div className="add-bill-page">
      <h2 className="h2-header">Add a New Bill</h2>
      <div className="form-container">
        <form>
          <div className="form-input">
            <p>Description: &nbsp;</p>
            <input type="text" name="name" />
          </div>

          <div className="form-input">
            <p>Date: &nbsp;</p>
            <input type="date" name="date" />
          </div>

          <div className="form-input">
            <p>Amount: &nbsp;</p>
            <input type="number" name="amount" />
          </div>

          <div className="form-input">
            <p>People: &nbsp;</p>
            <input type="text" name="people" />
          </div>

          <div className="form-input">
            <p>Who Paid: &nbsp;</p>
            <select>
              <option>Tommy Huynh</option>
              <option>Jim Jolly</option>
              <option>Chris Mowry</option>
            </select>
          </div>

          <button>Add New Bill</button>
        </form>
      </div>
    </div>
  );
};

export default AddBillForm;
