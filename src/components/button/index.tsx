import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import { ReactComponent as LoaderSVG } from '../loader/loader.svg';

import styles from './styles.scss';

interface Props {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

const getVariantClassName = (variant: string) => {
  switch (variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    case 'danger':
      return styles.danger;
    default:
      return styles.primary;
  }
};

const Button = ({
  loading,
  variant = 'primary',
  className,
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={classnames(
      styles.button,
      getVariantClassName(variant),
      className
    )}
    {...props}
  >
    {loading ? <LoaderSVG /> : children}
  </button>
);

export default Button;
