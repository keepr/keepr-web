import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// state
import { UserState } from '../../state/user';

// components
import Layout from '../layout';

// components
import Login from '../../containers/login';

const ProtectedRoute = ({ ...props }: RouteProps) => {
  const user = useRecoilValue(UserState);

  return user ? (
    <Layout>
      <Route {...props} />
    </Layout>
  ) : (
    <Login />
  );
};

export default ProtectedRoute;
