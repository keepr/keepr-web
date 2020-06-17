import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GiBlackKnightHelm } from 'react-icons/gi';

// helpers
import { Fetch, FetchWithAuth } from '../../helpers/fetch';

// context
import UserContext from '../../context/user';

import Form from './form';

import styles from './styles.scss';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className={styles.login}>
      <GiBlackKnightHelm className={styles.logo} />
      <h1>Login</h1>
      <Form
        onSubmit={(values) =>
          new Promise(async (resolve, reject) => {
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
                history.push('/');
                return resolve();
              }
            } catch (ex) {
              return reject(ex);
            }

            return reject();
          })
        }
      />
      <div className={styles.links}>
        <Link to="/register">Register</Link>
        <Link to="/forgot-password">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Login;
