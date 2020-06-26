import { atom, selector } from 'recoil';

import { FetchWithAuth } from '../helpers/fetch';

export const UserAtom = atom<Keeper.User | null>({
  key: 'user',
  default: null
});

export const UserState = selector<Keeper.User | null>({
  key: 'userState',
  get: async ({ get }) => {
    const user = get(UserAtom);
    const authToken = localStorage.getItem('auth');

    if (!user && authToken) {
      const user = await FetchWithAuth('/api/users/me');
      return user as Keeper.User;
    }

    return user;
  }
});
