import { Alert, AlertProps } from '@mui/material';

export type AlertErrorProps = {
  message: string;
  error?: boolean;
} & AlertProps;

const AlertError = ({ message, error = true, ...props }: AlertErrorProps) => {
  return (
    <>
      {error && (
        <Alert severity="error" {...props}>
          {message}
        </Alert>
      )}
    </>
  );
};

export default AlertError;
