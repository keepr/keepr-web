import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';
import { FaPlus, FaUsers, FaFolder } from 'react-icons/fa';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import LinkButton from '../../components/button/link';
import LinkCard from '../../components/card/link';
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';

import styles from './styles.scss';

const Client = () => {
  const { id } = useParams();
  const { value } = useAsync(async () => {
    const fetchClient = FetchWithAuth(`/api/clients/${id}`);
    const fetchContacts = FetchWithAuth(`/api/clients/${id}/contacts`);
    const fetchProjects = FetchWithAuth(`/api/clients/${id}/projects`);

    const responses = await Promise.all([
      fetchClient,
      fetchContacts,
      fetchProjects
    ]);

    return {
      client: responses[0] as Keeper.Client,
      contacts: responses[1] as Keeper.Contact[],
      projects: responses[2] as Keeper.Project[]
    };
  }, [id]);

  const { client, contacts, projects } = value || {};

  return (
    <Page title={client ? client.name : 'Loading'}>
      <div className={styles.section}>
        {client ? (
          <p className={styles.address}>{client.address}</p>
        ) : (
          <Placeholder />
        )}
      </div>
      <div className={styles.section}>
        <h3>
          <FaUsers />
          Contacts
          <LinkButton to={`/client/${id}/add-contact`}>
            <FaPlus className={styles.add} />
          </LinkButton>
        </h3>
        {contacts ? (
          contacts.map((x) => (
            <LinkCard key={`contact-${x.id}`} to={`/contact/${x.id}`}>
              <div>
                {x.firstName} {x.lastName}
              </div>
              <div>{x.email}</div>
              <div>{x.phone}</div>
            </LinkCard>
          ))
        ) : (
          <Placeholder />
        )}
      </div>
      <div className={styles.section}>
        <h3>
          <FaFolder />
          Projects
          <LinkButton to={`/client/${id}/add-project`}>
            <FaPlus className={styles.add} />
          </LinkButton>
        </h3>
        {projects ? (
          projects.map((x) => (
            <LinkCard key={`project-${x.id}`} to={`/project/${x.id}`}>
              <div>{x.name}</div>
              <div>
                Budget: {x.budget.toLocaleString()} {x.currency}
              </div>
              <div>Archived: {x.archive}</div>
            </LinkCard>
          ))
        ) : (
          <Placeholder />
        )}
      </div>
    </Page>
  );
};

export default Client;
