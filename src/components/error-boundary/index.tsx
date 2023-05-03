import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const primary = purple[500]; // #f44336

const ErrorBoundary = () => {
  const error = useRouteError();
  {
    /**if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!1</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  } */
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
    </Box>
  );
};

export default ErrorBoundary;
