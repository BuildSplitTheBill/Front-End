import React from "react";

const AddFriendForm = props => {
  return (
    <div className="form-container">
      <h2>Add New Friend</h2>
      <form>
        <div className="form-input">
          <p>Name: &nbsp;</p>
          <input type="text" name="name" />
        </div>

        <div className="form-input">
          <p>Email: &nbsp;</p>
          <input type="email" name="email" />
        </div>

        <button>Add</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
