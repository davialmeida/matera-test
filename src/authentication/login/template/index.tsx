import { Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { AuthenticationContext } from '@/authentication/context';
import UserService from '@/authentication/user/user-service';
import Toast from '@/components/toast';
import useToast from '@/components/toast/hook';

import LoginForm from '../form';
import { CardContainer, FormContainer, Wrapper } from './styles';

const LoginTemplate: FC = () => {
  const { handleSetUser, signed } = useContext(AuthenticationContext);
  const { toast, setToast, handleClose } = useToast();
  const navigate = useNavigate();

  if (signed) {
    return <Navigate to="/" />;
  }

  const handleLoginError = (error: any) => {
    setToast({
      open: true,
      message: error?.message,
      severity: 'error',
    });
  };

  const handleLoginSubmit = async (email: string, password: string) => {
    const user = await UserService.login(email, password);
    handleSetUser(user);
    navigate('/');
  };

  return (
    <Wrapper>
      <CardContainer>
        <Typography variant="h2" textAlign="center">
          Login
        </Typography>
        <FormContainer>
          <LoginForm
            onSubmit={({ email, password }) =>
              handleLoginSubmit(email, password).catch(handleLoginError)
            }
          />
        </FormContainer>
        <Toast
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          severity={toast.severity}
          message={toast.message}
          open={toast.open}
        />
      </CardContainer>
    </Wrapper>
  );
};

export default LoginTemplate;
