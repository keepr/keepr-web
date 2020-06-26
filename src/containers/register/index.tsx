import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { useSetRecoilState } from 'recoil';

// state
import { UserAtom } from '../../state/user';

// helpers
import { Fetch, FetchWithAuth } from '../../helpers/fetch';

// components
import AuthLayout from '../../components/auth-layout';
import Form from '../../components/form';
import Input from '../../components/input';

import styles from './styles.scss';

const Register = () => {
  const history = useHistory();
  const setUser = useSetRecoilState(UserAtom);

  return (
    <AuthLayout>
      <Helmet title="Register | Keepr" />
      <h1>Register</h1>
      <Form
        buttonVariant="secondary"
        buttonText="Register"
        onSubmit={async (values) => {
          try {
            const token = await Fetch('/api/register', {
              method: 'POST',
              body: JSON.stringify(values)
            });

            // always activate for now
            const jwt = await Fetch(`/api/activate/${token}`, {
              method: 'POST'
            });
            localStorage.setItem('auth', jwt as string);

            // now fetch user account
            const user = await FetchWithAuth('/api/users/me');
            setUser(user as Keeper.User);

            return history.push('/');
          } catch (ex) {
            return { [FORM_ERROR]: ex.message };
          }
        }}
      >
        <Field
          label="First name"
          name="firstName"
          type="text"
          component={Input}
        />
        <Field
          label="Last name"
          name="lastName"
          type="text"
          component={Input}
        />
        <Field label="Email" name="email" type="email" component={Input} />
        <Field
          label="Password"
          name="password"
          type="password"
          component={Input}
        />
      </Form>
      <div className={styles.links}>
        <Link to="/login">Login</Link>
        <Link to="/forgot-password">Forgot your password?</Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
