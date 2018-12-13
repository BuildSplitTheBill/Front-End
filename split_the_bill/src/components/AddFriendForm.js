import React from "react";

class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(e);

    this.setState({
      nameInput: ""
    });
  };

  render(props) {
    let users = this.props.users.filter(user =>
      user.name.includes(this.state.nameInput)
    );
    return (
      <div className="form-container">
        <h2 className="h2-header">Add New Friend</h2>
        <form className="add-friend-form">
          <div className="form-input">
            <p>Name: &nbsp;</p>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>

          <ol>
            {users.map(user => (
              <li>
                {user.name}
                <button onClick={this.addFriend}>Add</button>
              </li>
            ))}
          </ol>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
