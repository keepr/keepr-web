import { atom, selector, selectorFamily } from 'recoil';

import { FetchWithAuth } from '../helpers/fetch';

export const ProjectAtom = atom<Keeper.Project[] | null>({
  key: 'projects',
  default: null
});

export const ProjectState = selector<Keeper.Project[] | null>({
  key: 'projectState',
  get: async ({ get }) => {
    const projects = get(ProjectAtom);

    if (!projects) {
      const data = await FetchWithAuth('/api/projects');
      return data as Keeper.Project[];
    }

    return projects;
  }
});

export const ProjectByIdState = selectorFamily<Keeper.Project, number>({
  key: 'projectByIdState',
  get: (id) => async ({ get }) => {
    const projects = get(ProjectAtom);

    if (projects) {
      return projects.filter((x) => x.id === id)[0];
    }

    const project = await FetchWithAuth(`/api/projects/${id}`);
    return project as Keeper.Project;
  }
});
