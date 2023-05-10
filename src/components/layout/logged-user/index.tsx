import { Box } from '@mui/material';
import { useContext } from 'react';

import { AuthenticationContext } from '@/authentication/context';
import Dropdown from '@/components/button/dropdown';

import { WrapperLoggedUser } from './styles';

function LoggedUser() {
  const { user, logout } = useContext(AuthenticationContext);

  return (
    <WrapperLoggedUser>
      <img src={user.image} alt={user.nome} width="32" height="32" />
      {user.nome} {user.sobrenome}
      <Dropdown
        options={[
          {
            label: 'Sair',
            onClick: () => {
              logout();
            },
          },
        ]}
      />
    </WrapperLoggedUser>
  );
}

export default LoggedUser;
