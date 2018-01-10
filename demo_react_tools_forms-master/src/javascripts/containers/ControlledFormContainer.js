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
    this.setState({
      [e.target.name]: e.target.value
    });
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
