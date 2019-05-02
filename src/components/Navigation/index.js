import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Menu } from "semantic-ui-react";
import SignOut from "../SignOut";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <>
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      )}
    </AuthUserContext.Consumer>

  </>
);

const NavigationAuth = () => (
  <Menu>
    <Menu.Item>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.HOME}>Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Menu.Item>
    <Menu.Item>
      <SignOut />
    </Menu.Item>
  </Menu>
)

const NavigationNonAuth = () => (
  <Menu>
    <Menu.Item>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Menu.Item>
  </Menu>
)

export default Navigation;
