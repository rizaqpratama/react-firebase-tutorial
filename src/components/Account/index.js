import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <h3>Forget Password</h3>
        <PasswordForgetForm />
        <hr />
        <h3>Change Password</h3>
        <PasswordChangeForm />
    </div>
);

export default AccountPage;