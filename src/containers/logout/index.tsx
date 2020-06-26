import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

// state
import { UserAtom } from '../../state/user';

const Logout = () => {
  const setUser = useSetRecoilState(UserAtom);
  localStorage.removeItem('auth');
  setUser(null);

  return <Redirect to="/login" />;
};

export default Logout;
