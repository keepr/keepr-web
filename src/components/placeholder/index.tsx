import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  show?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Placeholder = ({ className, show = true, children }: Props) =>
  (show && <div className={classnames(styles.placeholder, className)} />) || (
    <>{children}</>
  );

export default Placeholder;
