import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaUsers, FaFolder } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

// state
import { ClientByIdState } from '../../state/client';

// components
import LinkButton from '../../components/button/link';
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import TextAvatar from '../../components/text-avatar';

import styles from './styles.scss';

const Client = () => {
  const { id } = useParams();
  const client = useRecoilValue(ClientByIdState(id));

  return (
    <Page title={client.name}>
      <div className={styles.section}>
        <p className={styles.address}>{client.address}</p>
      </div>
      <div className={styles.section}>
        <h3>
          <FaUsers />
          Contacts
          <LinkButton to={`/client/${id}/add-contact`}>
            <FaPlus className={styles.add} />
          </LinkButton>
        </h3>
        {client.contacts.map((x) => (
          <LinkCard
            className={styles.avatarCard}
            key={`contact-${x.id}`}
            to={`/contact/${x.id}`}
          >
            <TextAvatar text={`${x.firstName} ${x.lastName}`} />
            <div className={styles.info}>
              <span className={styles.name}>
                {x.firstName} {x.lastName}
              </span>
              <span>{x.email}</span>
              <span>{x.phone}</span>
            </div>
          </LinkCard>
        ))}
      </div>
      <div className={styles.section}>
        <h3>
          <FaFolder />
          Projects
          <LinkButton to={`/client/${id}/add-project`}>
            <FaPlus className={styles.add} />
          </LinkButton>
        </h3>
        {client.projects.map((x) => (
          <LinkCard key={`project-${x.id}`} to={`/project/${x.id}`}>
            <div>{x.name}</div>
            <div>
              Budget: {x.budget.toLocaleString()} {x.currency}
            </div>
            <div>Archived: {x.archive}</div>
          </LinkCard>
        ))}
      </div>
    </Page>
  );
};

export default Client;
