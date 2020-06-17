import React, { createContext, useState } from 'react';

interface UserContext {
  user: Keeper.User | null;
  setUser?: (input: Keeper.User) => void;
  clearUser?: () => void;
}

// create context and initialize with no user
const UserContext = createContext<UserContext>({ user: null });

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Keeper.User | null>(null);

  const context: UserContext = {
    user,
    setUser: (input: Keeper.User) => {
      setUser(input);
    },
    clearUser: () => {
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;

export default UserContext;
