import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';

// context
import UserContext from '../../context/user';

// components
import Layout from '../layout';

// components
import Login from '../../containers/login';

const ProtectedRoute = ({ ...props }: RouteProps) => {
  const { user } = useContext(UserContext);
  return user ? (
    <Layout>
      <Route {...props} />
    </Layout>
  ) : (
    <Login />
  );
};

export default ProtectedRoute;
