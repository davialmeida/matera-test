import { useState } from 'react';

import { ToastProps } from '.';

const useToast = () => {
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: ToastProps['severity'];
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleClick = () => {
    setToast({
      ...toast,
      open: true,
    });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast({
      ...toast,
      open: false,
    });
  };

  return { toast, setToast, handleClick, handleClose };
};

export default useToast;
