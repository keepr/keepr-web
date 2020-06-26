import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// state
import { ProjectByIdState } from '../../state/project';

// components
import Page from '../../components/page';

const Project = () => {
  const { id } = useParams();
  const project = useRecoilValue(ProjectByIdState(id));

  return (
    <Page title={`${project.name} | ${project.client.name}`}>
      <p>Rate: {project.hourlyRate}</p>
      <p>
        Budget: {project.budget.toLocaleString()} {project.currency}
      </p>
      <p>Archived: {project.archive}</p>
    </Page>
  );
};

export default Project;
