import { useEffect } from 'react';

import RegisterPageTemplate from './template';

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Registro';
  }, []);

  return <RegisterPageTemplate />;
};

export default RegisterPage;
