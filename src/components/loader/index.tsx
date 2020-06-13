import React from 'react';
import classnames from 'classnames';

import { ReactComponent as LoaderSVG } from './loader.svg';

import styles from './styles.scss';

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => (
  <div className={classnames(styles.loader, className)}>
    <LoaderSVG />
  </div>
);

export default Loader;
