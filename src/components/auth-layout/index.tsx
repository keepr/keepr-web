import React from 'react';
import { GiBlackKnightHelm } from 'react-icons/gi';

import styles from './styles.scss';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => (
  <div className={styles.layout}>
    <GiBlackKnightHelm className={styles.logo} />
    {children}
  </div>
);

export default AuthLayout;
