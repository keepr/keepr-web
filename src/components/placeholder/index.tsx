import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  className?: string;
}

const Placeholder = ({ className }: Props) => (
  <div className={classnames(styles.placeholder, className)} />
);

export default Placeholder;
