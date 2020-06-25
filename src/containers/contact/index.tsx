import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAsync, useAsyncFn } from 'react-use';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import Button from '../../components/button';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';

const Contact = () => {
  const history = useHistory();
  const { id } = useParams();
  const { value } = useAsync(
    async () => await FetchWithAuth(`/api/contacts/${id}`),
    [id]
  );
  const [state, deleteContact] = useAsyncFn(
    async () =>
      await FetchWithAuth(`/api/contacts/${id}`, { method: 'DELETE' }),
    [id]
  );

  // deleted
  if (state.value) {
    history.goBack();
  }

  const contact = value ? (value as Keeper.Contact) : null;

  return (
    <Page
      title={contact ? `${contact.firstName} ${contact.lastName}` : 'Loading'}
    >
      <Placeholder show={!contact}>
        <p>{contact?.email}</p>
        <p>{contact?.phone}</p>
        <Button
          loading={state.loading}
          variant="danger"
          onClick={async () => {
            const result = confirm(
              'Are you sure you want to delete this contact?'
            );

            if (result) {
              deleteContact();
            }
          }}
        >
          Delete
        </Button>
      </Placeholder>
    </Page>
  );
};

export default Contact;
