import React from 'react';
import { Form as FinalForm } from 'react-final-form';

// components
import Button from '../../components/button';
import Message from '../../components/message';

import styles from './styles.scss';

interface FormFields {
  [key: string]: string;
}

interface Props {
  onSubmit: (input: FormFields) => void;
  children: React.ReactNode;
  buttonText?: string;
}

const Form = ({ onSubmit, children, buttonText = 'Submit' }: Props) => (
  <FinalForm
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine, submitError }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        {submitError && (
          <Message className={styles.formError} error>
            {submitError}
          </Message>
        )}
        {children}
        <Button
          disabled={pristine || submitting}
          loading={submitting}
          className={styles.button}
        >
          {buttonText}
        </Button>
      </form>
    )}
  />
);

export default Form;
