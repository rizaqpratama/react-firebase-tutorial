import React from "react";
import { Button } from "semantic-ui-react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignOutButton = ({ firebase, history }) => {
  const handleSignOut = () => {
    debugger;
    firebase.doSignOut();
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <Button type="button" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};
export default compose(
  withRouter,
  withFirebase
)(SignOutButton);
//export default withFirebase(SignOutButton);
