import { Card } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 2em;
  max-width: 800px;
  height: 100vh;
`;

export const CardContainer = styled(Card)`
  padding: 1.5em;
`;

export const FormContainer = styled.div`
  padding: 4em 0em;
`;
