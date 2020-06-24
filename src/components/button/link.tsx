import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.scss';

const LinkButton = ({ className, children, ...props }: LinkProps) => (
  <Link className={classnames(styles.linkButton, className)} {...props}>
    {children}
  </Link>
);

export default LinkButton;
