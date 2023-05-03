import { createBrowserRouter } from 'react-router-dom';

import LoginPage from './authentication/login';
import RegisterPage from './authentication/register';
import ErrorBoundary from './components/error-boundary';
import ProtectPage from './components/protect-page';
import HomePage from './home';
import CriarProdutoPage from './produtos/criar';
import ListarProdutosPage from './produtos/listar';
import VisualizarProdutoPage from './produtos/visualizar';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/produtos',
    children: [
      {
        index: true,
        element: <ListarProdutosPage />,
      },
      {
        path: 'criar',
        element: <CriarProdutoPage />,
      },
      {
        path: 'visualizar/:id',
        element: <VisualizarProdutoPage />,
      },
    ].map((route) => ({
      ...route,
      element: <ProtectPage>{route.element}</ProtectPage>,
    })),
  },
  {
    path: '*',
    element: <ErrorBoundary />,
  },
  {
    path: '/',
    element: (
      <ProtectPage>
        <HomePage />
      </ProtectPage>
    ),
  },
]);

export default router;
