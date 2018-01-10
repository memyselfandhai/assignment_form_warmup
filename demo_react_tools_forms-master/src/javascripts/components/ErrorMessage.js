import React, { PropTypes } from "react";
import { Alert } from "reactstrap";
import { isEmpty } from "../helpers";

const ErrorMessage = ({ errors }) => {
  if (isEmpty(errors)) {
    return null;
  }

  if (errors.type === "email") {
    return (
      <Alert color="danger">
        The email should be in the form of abc@xyz.com
      </Alert>
    );
  }

  if (errors.type === "password") {
    return (
      <Alert color="danger">
        The password should be at least 8 characters.
      </Alert>
    );
  }

  return <Alert color="danger">Oops, looks like you have some errors...</Alert>;
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired
};

ErrorMessage.defaultProps = {
  errors: {}
};

export default ErrorMessage;
