import React from 'react';
import { Link } from 'react-router-dom';
import { useAsync } from 'react-use';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import Page from '../../components/page';

import styles from './styles.scss';

const Clients = () => {
  const { value: data, loading } = useAsync(
    async () => await FetchWithAuth('/api/clients')
  );

  return (
    <Page title="Clients">
      {loading && (
        <>
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
        </>
      )}
      {data &&
        (data as Keeper.Client[]).map((client) => (
          <Link
            key={`client-${client.id}`}
            to={`/client/${client.id}`}
            className={styles.client}
          >
            <span className={styles.heading}>{client.name}</span>
            <span className={styles.address}>{client.address}</span>
            <span className={styles.view}>View</span>
          </Link>
        ))}
    </Page>
  );
};

export default Clients;
