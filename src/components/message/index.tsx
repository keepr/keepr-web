import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  className?: string;
  error?: boolean;
  children: React.ReactNode;
}

const Message = ({ children, className, error }: Props) => (
  <div className={classnames(styles.message, error && styles.error, className)}>
    {children}
  </div>
);

export default Message;
