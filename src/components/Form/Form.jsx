import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    experience: "junior",
    licence: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleChangeCheckbox = (e) => {
    this.setState({
      licence: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень:</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            onChange={this.handleChangeCheckbox}
            checked={this.state.licence}
          />
          I agree
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
