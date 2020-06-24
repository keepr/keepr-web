import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useAsync } from 'react-use';

// context
import UserContext from '../context/user';

// helpers
import { FetchWithAuth } from '../helpers/fetch';

// components
import Loader from '../components/loader';
import ProtectedRoute from '../components/protected-route';

// lazy loaded containers
// auth
const Login = lazy(() => import('./login'));
const Logout = lazy(() => import('./logout'));
const NotFound = lazy(() => import('./not-found'));
const Register = lazy(() => import('./register'));

// clients
const Clients = lazy(() => import('./clients'));
const Client = lazy(() => import('./client'));

// contacts
const AddContact = lazy(() => import('./contact/add'));
const Contact = lazy(() => import('./contact'));

// projects
const Project = lazy(() => import('./project'));

const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));

const App = () => {
  // scroll to top whenever the url changes
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);

  // user auth
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
        <ProtectedRoute path="/client/:id" component={Client} exact />
        <ProtectedRoute
          path="/client/:id/add-contact"
          component={AddContact}
          exact
        />
        <ProtectedRoute path="/contact/:id" component={Contact} exact />
        <ProtectedRoute path="/project/:id" component={Project} exact />
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
