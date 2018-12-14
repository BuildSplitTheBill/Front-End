import React, { Component } from "react";

class AddBillForm extends Component {
  state = {
    description: "",
    amount: 0,
    parties: []
  };

  handleCheckChange = event => {
    event.persist();

    if (event.target.checked) {
      this.setState({
        ...this.state,
        parties: [...this.state.parties, event.target.name]
      });
    } else {
      this.setState({
        ...this.state,
        parties: [
          ...this.state.parties.filter(item => item !== event.target.name)
        ]
      });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBill(this.state);
  };

  render() {
    const { description, amount, parties } = this.state;
    const { handleChange, handleSubmit, handleCheckChange } = this;
    const { friends } = this.props;

    return (
      <div className="add-bill-page">
        <h2 className="h2-header">Add a New Bill</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                required
                type="text"
                name="description"
                placeholder="description"
                onChange={handleChange}
                value={description}
              />
            </div>

            <div className="form-input">
              <input
                required
                type="number"
                name="amount"
                placeholder="amount"
                onChange={handleChange}
                value={amount}
              />
            </div>

            {friends.map(({ id, name }) => (
              <div className="form-checkbox">
                  <label>
                    {name}
                  </label>
                  <input
                    required
                    type="checkbox"
                    name={id}
                    onChange={handleCheckChange}
                    value={amount}
                  />
                
              </div>
            ))}

            <button type="submit">Add New Bill</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddBillForm;
