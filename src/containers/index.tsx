import React, { Suspense, lazy, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAsync } from 'react-use';

// context
import UserContext from '../context/user';

// helpers
import { FetchWithAuth } from '../helpers/fetch';

// components
import Loader from '../components/loader';
import ProtectedRoute from '../components/protected-route';

// lazy loaded containers
const Clients = lazy(() => import('./clients'));
const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));
const Login = lazy(() => import('./login'));
const Logout = lazy(() => import('./logout'));
const NotFound = lazy(() => import('./not-found'));
const Register = lazy(() => import('./register'));

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const authToken = localStorage.getItem('auth');

  useAsync(async () => {
    if (authToken && !user && setUser) {
      const data = await FetchWithAuth('/api/users/me');
      setUser(data as Keeper.User);
    }
  }, [user, setUser]);

  return authToken && !user ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <ProtectedRoute path="/clients" component={Clients} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/health" component={Health} exact />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default App;
