import React, { Component } from 'react';

class Form extends Component { 
  state = {
    name: '',
    email: ''
  }

  componentDidMount() {
    const { user } = this.props;

    if (user) {
      this.setState({ name: user.name, email: user.email })
    }
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    const { state } = this;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={state.name}
          />
        </label>

        <label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={state.email}
          />
        </label>

        <input
          type="submit"
          value="Save"
        />
      </form>
    )
  }
}

export default Form;
