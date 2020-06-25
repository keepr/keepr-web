import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import Form from '../../components/form';
import Input from '../../components/input';
import Page from '../../components/page';

const AddContact = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <Page title="Add Contact">
      <Form
        buttonText="Add"
        onSubmit={async (values) => {
          try {
            await FetchWithAuth(`/api/clients/${id}/contacts`, {
              method: 'POST',
              body: JSON.stringify(values)
            });

            return history.push(`/client/${id}`);
          } catch (ex) {
            return { [FORM_ERROR]: ex.message };
          }
        }}
      >
        <Field
          label="First name"
          name="firstName"
          type="text"
          component={Input}
        />
        <Field
          label="Last name"
          name="lastName"
          type="text"
          component={Input}
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          component={Input}
        />
        <Field label="Phone number" name="phone" type="tel" component={Input} />
      </Form>
    </Page>
  );
};

export default AddContact;
