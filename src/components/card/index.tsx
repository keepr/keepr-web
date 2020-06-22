import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: Props) => (
  <div className={classnames(styles.card, className)}>{children}</div>
);

export default Card;
