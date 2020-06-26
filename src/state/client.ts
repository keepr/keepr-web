import { atom, selector, selectorFamily } from 'recoil';

import { FetchWithAuth } from '../helpers/fetch';

export const ClientAtom = atom<Keeper.Client[] | null>({
  key: 'clients',
  default: null
});

export const ClientState = selector<Keeper.Client[] | null>({
  key: 'clientState',
  get: async ({ get }) => {
    const clients = get(ClientAtom);

    if (!clients) {
      const data = await FetchWithAuth('/api/clients');
      return data as Keeper.Client[];
    }

    return clients;
  }
});

export const ClientByIdState = selectorFamily<Keeper.ClientWithData, number>({
  key: 'clientByIdState',
  get: (id) => async ({ get }) => {
    const clients = get(ClientAtom);
    let client: Keeper.Client;

    if (clients) {
      client = clients.filter((x) => x.id === id)[0];
    } else {
      // clients haven't been fetched yet, so lets go fetch everything.
      client = (await FetchWithAuth(`/api/clients/${id}`)) as Keeper.Client;
    }

    const fetchContacts = FetchWithAuth(`/api/clients/${id}/contacts`);
    const fetchProjects = FetchWithAuth(`/api/clients/${id}/projects`);

    const [contacts, projects] = await Promise.all([
      fetchContacts,
      fetchProjects
    ]);

    return {
      ...client,
      contacts: contacts as Keeper.Contact[],
      projects: projects as Keeper.Project[]
    };
  }
});
