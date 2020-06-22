import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.scss';

const LinkCard = ({ className, to, children }: LinkProps) => (
  <Link to={to} className={classnames(styles.card, className)}>
    {children}
    <span className={styles.view}>View</span>
  </Link>
);

export default LinkCard;
