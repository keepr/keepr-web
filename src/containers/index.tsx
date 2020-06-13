import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// context
import { UserProvider } from '../context/user';

// components
import Loader from '../components/loader';
import ProtectedRoute from '../components/protected-route';

// lazy loaded containers
const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));
const Login = lazy(() => import('./login'));
const Logout = lazy(() => import('./logout'));
const NotFound = lazy(() => import('./not-found'));

const App = () => (
  <UserProvider>
    <Suspense fallback={<Loader />}>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/health" component={Health} exact />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </UserProvider>
);

export default App;
