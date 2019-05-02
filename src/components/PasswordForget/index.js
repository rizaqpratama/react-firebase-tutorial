import React from 'react'
import { Form, Button } from 'semantic-ui-react';

import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase';

const PasswordForgetPage = () => (
    <div>

        <h1>Password Forget</h1>
        <PasswordForgetForm />


    </div>
)

const INITIAL_STATE = {
    email: '',
    error: null
}

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
        const { email } = this.state
        event.preventDefault()
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    onChange = event => (this.setState({ [event.target.name]: event.target.value }))

    render() {
        const { email, error } = this.state
        const isInvalid = email === ''


        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Email Address</label>
                    <input name='email' value={this.state.email} onChange={this.onChange} type='text' placeholder='email'></input>
                </Form.Field>
                <Button disabled={isInvalid} type='submit'>
                    Reset My Password
                </Button>

                {error && <p>{error.message}</p>}
            </Form>
        )
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET} >Forgot Password?</Link>

    </p>
)


export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)
export { PasswordForgetForm, PasswordForgetLink }