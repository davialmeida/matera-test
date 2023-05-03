import { useEffect } from 'react';

import LoginTemplate from './template';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Registro';
  }, []);

  return <LoginTemplate />;
};

export default LoginPage;
