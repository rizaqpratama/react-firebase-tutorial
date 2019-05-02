import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Container } from "../Container";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Form, Button } from "semantic-ui-react";
import { SignUpLink } from "../SignUp";

const SignInPage = () => (
  <Container>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </Container>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormbase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormbase);
export default SignInPage;
export { SignInForm };
