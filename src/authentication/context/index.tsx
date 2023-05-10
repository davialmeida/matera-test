import { isEmpty } from 'lodash';
import { createContext, FC, useEffect, useMemo, useState } from 'react';

import useLocalStorage from '@/localstorage';

import { User } from '../user/types';

export type AuthenticationContextType = {
  user: User;
  signed: boolean;
  handleSetUser: (user: User) => void;
  logout: () => void;
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: {} as User,
  signed: false,
  handleSetUser: () => {
    throw new Error('handleSetUser function must be overridden');
  },
  logout: () => {
    throw new Error('logout function must be overridden');
  },
});

export const getUserFromLocalStorage = (): User => {
  const user = localStorage.getItem('user');

  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const setUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const AuthenticationProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (user) {
      handleSetUser(user);
    }
  }, []);

  const handleSetUser = (user: User) => {
    setUserToLocalStorage(user);
    setUser(user);
    setSigned(!!user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setSigned(false);
    window.location.reload();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        signed,
        handleSetUser,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
