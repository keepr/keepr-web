import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import { ReactComponent as LoaderSVG } from '../loader/loader.svg';

import styles from './styles.scss';

interface Props {
  loading?: boolean;
}

const Button = ({
  loading,
  className,
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={classnames(styles.button, className)} {...props}>
    {loading ? <LoaderSVG /> : children}
  </button>
);

export default Button;
