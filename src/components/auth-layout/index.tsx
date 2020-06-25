import React from 'react';

import styles from './styles.scss';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => (
  <div className={styles.layout}>
    <span className={styles.logo}>keepr</span>
    {children}
  </div>
);

export default AuthLayout;
