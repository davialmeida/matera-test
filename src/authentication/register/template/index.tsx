import { Snackbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '@/authentication/user/types';
import UserService from '@/authentication/user/user-service';
import CepService from '@/cep/service';
import Toast, { ToastProps } from '@/components/toast';

import RegisterForm from '../forms/register-form';
import RegisterContext from '../register-context';
import { CardContainer, Wrapper } from './styles';

const RegisterPageTemplate = () => {
  const [user, setUser] = useState<User>({} as User);
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: ToastProps['severity'];
  }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Registro';
  }, []);

  const handleCepChange = async (cep: string) => {
    if (cep?.replace(/\D/g, '')?.length !== 8) return;

    const response = await CepService.getByCep(cep);

    return response.data;
  };

  const handleRegisterSubmit = (data: User) => {
    UserService.post(data).finally(() => {
      navigate('/login');
      setToast({
        open: true,
        message: 'Usuário cadastrado com sucesso!',
        severity: 'success',
      });
    });
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <Wrapper>
      <CardContainer>
        <Typography variant="h2" textAlign="center" marginBottom="0.5em">
          Registro
        </Typography>
        <RegisterContext.Provider
          value={{
            user,
            setUser,
            handleCepChange,
            handleRegisterSubmit,
            handleBack,
          }}
        >
          <RegisterForm />
          <Toast severity={toast.severity} open={toast.open} message={toast.message} />
        </RegisterContext.Provider>
      </CardContainer>
    </Wrapper>
  );
};

export default RegisterPageTemplate;
