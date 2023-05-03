import { FormHelperText, InputLabel } from '@mui/material';
import styled from 'styled-components';

export const ImportBox = styled.div<{
  error?: boolean;
}>`
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  padding: 40px;
  border-style: dashed;
`;

export const ImportFileCardLabel = styled(InputLabel)`
  margin: 0.5em 0.5em;
`;

export const ImportFileCardErrorMessage = styled(FormHelperText)`
  margin: 0.5em 0.5em;
`;
