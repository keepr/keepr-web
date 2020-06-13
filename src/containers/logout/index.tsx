import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

// context
import UserContext from '../../context/user';

const Logout = () => {
  const { clearUser } = useContext(UserContext);
  useEffect(() => {
    if (clearUser) {
      localStorage.removeItem('auth');
      clearUser();
    }
  }, [clearUser]);

  return <Redirect to="/login" />;
};

export default Logout;
