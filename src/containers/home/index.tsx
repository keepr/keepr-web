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

const Home = () => {
  const { value, loading } = useAsync(
    async () => await FetchWithAuth('/api/projects')
  );

  const projects = !loading && value ? (value as Keeper.Project[]) : [];
  return (
    <Page title="Home">
      <Placeholder show={loading}>
        {projects.map((x) => (
          <LinkCard
            className={styles.project}
            key={`project-${x.id}`}
            to={`/project/${x.id}`}
          >
            <TextAvatar text={x.name} />
            <div className={styles.info}>
              <span className={styles.name}>{x.name}</span>
              <span>{x.client.name}</span>
            </div>
          </LinkCard>
        ))}
      </Placeholder>
    </Page>
  );
};

export default Home;
