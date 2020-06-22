import React from 'react';
import { useAsync } from 'react-use';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';

import styles from './styles.scss';

const Clients = () => {
  const { value: data, loading } = useAsync(
    async () => await FetchWithAuth('/api/clients')
  );

  return (
    <Page title="Clients">
      {loading && (
        <>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </>
      )}
      {data &&
        (data as Keeper.Client[]).map((client) => (
          <LinkCard
            key={`client-${client.id}`}
            to={`/client/${client.id}`}
            className={styles.client}
          >
            <span className={styles.heading}>{client.name}</span>
            <span className={styles.address}>{client.address}</span>
          </LinkCard>
        ))}
    </Page>
  );
};

export default Clients;
