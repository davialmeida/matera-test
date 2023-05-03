import { createContext } from 'react';

import { Cep } from '@/cep/types';

import { User } from '../user/types';

const RegisterContext = createContext<{
  user: User;
  setUser: (user: User) => void;
  handleCepChange: (cep: string) => Promise<Cep>;
  handleRegisterSubmit: (user: User) => void;
  handleBack: () => void;
}>({
  user: {} as User,
  handleCepChange: () => {
    throw new Error('RegisterContext.handleCepChange was not implemented');
  },
  setUser: () => {
    throw new Error('RegisterContext.setUser was not implemented');
  },
  handleRegisterSubmit: () => {
    throw new Error('RegisterContext.handleRegisterSubmit was not implemented');
  },
  handleBack: () => {
    throw new Error('RegisterContext.handleBack was not implemented');
  },
});

export default RegisterContext;
