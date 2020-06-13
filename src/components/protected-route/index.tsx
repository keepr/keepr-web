import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

// context
import UserContext from '../../context/user';

// components
import Layout from '../layout';

const ProtectedRoute = ({ ...props }: RouteProps) => {
  const { user } = useContext(UserContext);
  return user ? (
    <Layout>
      <Route {...props} />
    </Layout>
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
