import React from 'react';
import { useRecoilValue } from 'recoil';

// state
import { UserState } from '../../state/user';
import { ProjectState } from '../../state/project';

// components
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';

import styles from './styles.scss';

const Home = () => {
  const user = useRecoilValue(UserState);
  const projects = useRecoilValue(ProjectState);

  return (
    <Page title={user ? `Hi ${user.firstName}` : 'Home'}>
      <h2>Active Projects</h2>
      <Placeholder show={!projects}>
        {projects?.map((x) => (
          <LinkCard
            className={styles.project}
            key={`project-${x.id}`}
            to={`/project/${x.id}`}
          >
            <span className={styles.name}>{x.name}</span>
            <span>{x.client.name}</span>
          </LinkCard>
        ))}
      </Placeholder>
    </Page>
  );
};

export default Home;
