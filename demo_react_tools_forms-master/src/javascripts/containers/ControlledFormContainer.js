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
    console.log("emailField value", emailField);
    console.log("name", e.target);
    if (!/@/.test(emailField)) {
      console.log("got to if branch");
      this.setState({
        ...this.state,
        error: { type: "Email should be of the form abc@xyz!" }
      });
    }
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
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
