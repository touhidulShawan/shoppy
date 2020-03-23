import React, { Component } from "react";
import "./SignIn.scss";

import FormInput from "../form-input/FormInput";
import Btn from "../btn/Btn";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    alert(`Email: ${this.state.email} Pass: ${this.state.password}`);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="signIn">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit} className="signIn--form">
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
            placeholder="Email"
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            placeholder="Password"
          />
          <Btn type="submit" value="Login" title="Login" />
        </form>
      </div>
    );
  }
}
export default SignIn;
