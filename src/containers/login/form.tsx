import React from 'react';
import { Form, Field } from 'react-final-form';

// components
import Button from '../../components/button';
import Input from '../../components/input';

import styles from './styles.scss';

interface LoginFormFields {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (input: LoginFormFields) => void;
}

const LoginForm = ({ onSubmit }: Props) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field label="Email" name="email" type="email" component={Input} />
        <Field
          label="Password"
          name="password"
          type="password"
          component={Input}
        />
        <Button
          disabled={pristine || submitting}
          loading={submitting}
          className={styles.button}
        >
          Submit
        </Button>
      </form>
    )}
  />
);

export default LoginForm;
