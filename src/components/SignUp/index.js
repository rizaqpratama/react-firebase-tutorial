import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FirebaseContext, withFirebase } from "../Firebase";
import { Container } from "../Container";
import { Button, Form } from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";

const SignUpPage = () => (
  <Container>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </Container>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Full Name</label>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
          />
        </Form.Field>

        <Form.Field>
          <label>Pasword</label>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Field>
        <Button disabled={isInvalid} type="submit">
          Sign Up
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
  </p>
);
const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);
export default SignUpPage;
export { SignUpForm, SignUpLink };
