import React from 'react';
import classnames from 'classnames';
import { FieldRenderProps } from 'react-final-form';

import styles from './styles.scss';

const Input = ({
  className,
  input,
  meta,
  label: labelText,
  ...props
}: FieldRenderProps<string>) => (
  <div className={classnames(styles.field, className)}>
    <label className={styles.label} htmlFor={input.name}>
      {labelText}
      <input className={styles.input} {...input} {...props} />
    </label>
    {meta.touched && meta.error && (
      <div className={styles.error}>{meta.error}</div>
    )}
  </div>
);

export default Input;
