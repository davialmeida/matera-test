import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { AuthenticationProvider } from './authentication/context';
import router from './router';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ededed;
    margin: 0;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
