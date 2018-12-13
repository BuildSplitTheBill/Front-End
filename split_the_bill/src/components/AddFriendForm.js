import React from "react";

class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);

    this.setState({
      name: ""
    });
  };

  render(props) {
    return (
      <div className="form-container">
        <h2 className="h2-header">Add New Friend</h2>
        <form className="add-friend-form">
          <div className="form-input">
            <p>Name: &nbsp;</p>
            <input type="text" name="name" />
          </div>

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
