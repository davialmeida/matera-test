import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthenticationContext } from '@/authentication/context';

const ProtectPage: FC = ({ children }) => {
  const { signed } = useContext(AuthenticationContext);

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectPage;
