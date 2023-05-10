import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren, useEffect } from 'react';

import LoggedUser from './logged-user';
import Menu from './menu';

export type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

const drawerWidth = 240;

const Layout = (props: LayoutProps) => {
  useEffect(() => {
    document.title = props.title || '';
  }, [props.title]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
          <LoggedUser />
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Menu />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
