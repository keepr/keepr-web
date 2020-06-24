import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';

// helpers
import { FetchWithAuth } from '../../helpers/fetch';

// components
import Page from '../../components/page';
import Placeholder from '../../components/placeholder';

const Project = () => {
  const { id } = useParams();
  const { value } = useAsync(
    async () => await FetchWithAuth(`/api/projects/${id}`)
  );

  const project = value ? (value as Keeper.Project) : null;

  return (
    <Page title={project ? project.name : 'Loading'}>
      {project ? (
        <div>
          <p>Rate: {project.hourlyRate}</p>
          <p>
            Budget: {project.budget.toLocaleString()} {project.currency}
          </p>
          <p>Archived: {project.archive}</p>
        </div>
      ) : (
        <Placeholder />
      )}
    </Page>
  );
};

export default Project;
