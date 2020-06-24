import React from 'react';
import classnames from 'classnames';
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
  buttonVariant?: 'primary' | 'secondary';
  className?: string;
}

const Form = ({
  onSubmit,
  children,
  className,
  buttonText = 'Submit',
  buttonVariant = 'primary'
}: Props) => (
  <FinalForm
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine, submitError }) => (
      <form
        className={classnames(styles.form, className)}
        onSubmit={handleSubmit}
      >
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
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </form>
    )}
  />
);

export default Form;
