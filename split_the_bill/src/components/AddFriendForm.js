import React from "react";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = (e, id) => {
    e.preventDefault();
    this.props.addFriend(id);
  };

  render() {
    let users = this.props.users.filter(user =>
      user.name.toLowerCase().includes(this.state.name.toLowerCase())
    );

    return (
      <div className="form-container">
        <h2 className="h2-header">Add New Friend</h2>
        <form className="add-friend-form">
          <div className="form-input">
            <p>Search by name: &nbsp;</p>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>

          <ol>
            {this.state.name.length === 0
              ? null
              : users.map(user => (
                  <li>
                    {user.name}
                    <button onClick={e => this.addFriend(e, user.id)}>
                      Add
                    </button>
                  </li>
                ))}
          </ol>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
