import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: "",
      examplePassword: "",
      exampleURL: ""
    };
  }

  onChangeInput = e => {
    const emailField = document.getElementById("exampleEmail").value;
    const passwordField = document.getElementById("examplePassword").value;
    // if target is email field
    if (e.target.name === "exampleEmail")
      if (!/@/.test(emailField) && emailField.length > 0) {
        this.setState({
          errors: { type: "email" }
        });
      } else {
        this.setState({
          errors: {}
        });
      }
    else if (e.target.name === "examplePassword") {
      if (passwordField.length < 8) {
        this.setState({
          errors: { type: "password" }
        });
      } else {
        this.setState({
          errors: {}
        });
      }
    }

    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("state => ", this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (
      e.target.exampleEmail.value.length > 0 &&
      e.target.examplePassword.value.length > 0 &&
      e.target.exampleUrl.value.length > 0
    ) {
      this.formSuccess();
    } else {
      this.formError();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: "",
        examplePassword: "",
        exampleURL: ""
      },
      () => console.log("Success!")
    );
  };

  formError = () => {
    this.setState(
      {
        success: false,
        errors: { type: "No email provided." },
        exampleEmail: "",
        examplePassword: "",
        exampleURL: ""
      },
      () => console.log("Error in your form.")
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
