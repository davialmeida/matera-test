import { Alert, AlertProps, Snackbar, SnackbarProps } from '@mui/material';

export type ToastProps = SnackbarProps & {
  severity: AlertProps['severity'];
  alertProps?: AlertProps;
};

const Toast: React.FC<ToastProps> = ({ alertProps, message, ...props }) => {
  return (
    <Snackbar {...props} autoHideDuration={props.autoHideDuration || 5000}>
      <Alert severity={props.severity} sx={{ width: '100%' }} {...alertProps}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
