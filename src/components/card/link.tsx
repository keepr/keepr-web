import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './styles.scss';

const LinkCard = ({ className, to, children }: LinkProps) => (
  <Link to={to} className={styles.card}>
    <div className={className}>{children}</div>
    <span className={styles.view}>View</span>
  </Link>
);

export default LinkCard;
