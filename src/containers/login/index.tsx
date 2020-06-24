import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

// helpers
import { Fetch, FetchWithAuth } from '../../helpers/fetch';

// context
import UserContext from '../../context/user';

// components
import AuthLayout from '../../components/auth-layout';
import Form from '../../components/form';
import Input from '../../components/input';

import styles from './styles.scss';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  return (
    <AuthLayout>
      <Helmet title="Login | Keepr" />
      <h1>Login</h1>
      <Form
        buttonVariant="secondary"
        buttonText="Login"
        onSubmit={async (values) => {
          try {
            // login
            const token = await Fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify(values)
            });

            // set token in localstorage
            localStorage.setItem('auth', token as string);

            // now fetch user account
            const user = await FetchWithAuth('/api/users/me');
            if (setUser) {
              setUser(user as Keeper.User);
              return history.push('/');
            }

            return { [FORM_ERROR]: 'Unable to log in.' };
          } catch (ex) {
            return { [FORM_ERROR]: ex.message };
          }
        }}
      >
        <Field label="Email" name="email" type="email" component={Input} />
        <Field
          label="Password"
          name="password"
          type="password"
          component={Input}
        />
      </Form>
      <div className={styles.links}>
        <Link to="/register">Register</Link>
        <Link to="/forgot-password">Forgot your password?</Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
