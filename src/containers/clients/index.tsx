import React from 'react';
import { useRecoilValue } from 'recoil';

// state
import { ClientState } from '../../state/client';

// components
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';
import TextAvatar from '../../components/text-avatar';

import styles from './styles.scss';

const Clients = () => {
  const clients = useRecoilValue(ClientState);

  return (
    <Page title="Clients">
      <Placeholder show={!clients}>
        {clients?.map((client) => (
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
