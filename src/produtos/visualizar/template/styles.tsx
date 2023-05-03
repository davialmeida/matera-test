import { List as ListBase, ListItemText as ListItemTextBase } from '@mui/material';
import styled from 'styled-components';

export const List = styled(ListBase)`
  width: 100%;
`;
export const ListItemText = styled(ListItemTextBase)`
  display: flex;
  flex-direction: column-reverse;
`;

export const ImageContainer = styled.div`
  width: 400px;
`;

export const Image = styled.img`
  width: 100%;
`;
