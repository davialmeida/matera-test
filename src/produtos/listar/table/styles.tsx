import { Visibility } from '@mui/icons-material';
import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12%;
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

export const ViewButton = styled(Visibility)`
  cursor: pointer;
`;
