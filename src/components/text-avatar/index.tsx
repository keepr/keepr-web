import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  text: string;
  className?: string;
}

const TextAvatar = ({ className, text }: Props) => {
  const parts = text.indexOf(' ') >= 0 ? text.split(' ') : [text];

  // if there are more than 2 parts to this array
  // only get the first two
  const shortened = parts
    .filter((item, i) => i < 2)
    .map((part) => part.charAt(0))
    .join('');

  return (
    <div className={classnames(styles.avatar, className)}>{shortened}</div>
  );
};

export default TextAvatar;
