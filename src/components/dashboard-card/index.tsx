import { Box, Card, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 20px;
`;

export type DashboardCardProps = PropsWithChildren<{
  title: string;
  actions?: React.ReactNode;
}>;

export const DashboardCard = ({ title, actions, children }: DashboardCardProps) => {
  return (
    <CardWrapper variant="outlined">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" textAlign="left">
          {title}
        </Typography>
        <Box display="flex" gap="0.5em">
          {actions}
        </Box>
      </Box>
      {children}
    </CardWrapper>
  );
};
