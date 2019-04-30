import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes'

//pages
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} components={LandingPage} />
            <Route path={ROUTES.SIGN_UP} components={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} components={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} components={PasswordForgetPage} />
            <Route path={ROUTES.HOME} components={HomePage} />
            <Route path={ROUTES.ACCOUNT} components={AccountPage} />
            <Route path={ROUTES.ADMIN} components={AdminPage} />
        </div>

    </Router>
)
export default App