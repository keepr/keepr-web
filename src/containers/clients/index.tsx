import React from 'react';
import { useAsync } from 'react-use';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';
import TextAvatar from '../../components/text-avatar';

import styles from './styles.scss';

const Clients = () => {
  const { value: data, loading } = useAsync(
    async () => await FetchWithAuth('/api/clients')
  );

  const clients = !loading && data ? (data as Keeper.Client[]) : [];

  return (
    <Page title="Clients">
      <Placeholder show={loading}>
        {clients.map((client) => (
          <LinkCard
            key={`client-${client.id}`}
            to={`/client/${client.id}`}
            className={styles.client}
          >
            <TextAvatar text={client.name} />
            <div className={styles.info}>
              <span className={styles.heading}>{client.name}</span>
              <span>Piet Pompies</span>
              <span>1 active project</span>
            </div>
          </LinkCard>
        ))}
      </Placeholder>
    </Page>
  );
};

export default Clients;
