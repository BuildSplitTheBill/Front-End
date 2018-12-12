import React from "react";

const AddBillForm = props => {
  return (
    <div className="add-bill-page">
      <h2 className="h2-header">Add a New Bill</h2>
      <div className="form-container">
        <form>
          <div className="form-input">
            <h4>Description: &nbsp;</h4>
            <input type="text" name="name" />
          </div>

          <div className="form-input">
            <h4>Date: &nbsp;</h4>
            <input type="date" name="date" />
          </div>

          <div className="form-input">
            <h4>Amount: &nbsp;</h4>
            <input type="number" name="amount" />
          </div>

          <div className="form-input">
            <h4>People: &nbsp;</h4>
            <input type="text" name="people" />
          </div>

          <div className="form-input">
            <h4>Who Paid: &nbsp;</h4>
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
