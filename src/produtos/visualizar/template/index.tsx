import { Box, ListItem } from '@mui/material';
import { useContext } from 'react';

import { VisualizarProdutoContext } from '../contexts/visualizar-produto-context';
import { Image, ImageContainer, List, ListItemText } from './styles';

const VisualizarProdutoTemplate = () => {
  const { produto } = useContext(VisualizarProdutoContext);
  return (
    <Box display="flex" marginTop="2em">
      <ImageContainer>
        <Image src="https://picsum.photos/400/300" alt="Imagem do Produto" />
      </ImageContainer>
      <List>
        <ListItem>
          <ListItemText primary={produto?.nome} secondary="Nome" />
          <ListItemText primary={produto?.preco} secondary="Preço" />
        </ListItem>
        <ListItem>
          <ListItemText primary={produto?.qt_estoque} secondary="Quantidade em Estoque" />
          <ListItemText primary={produto?.qt_vendas} secondary="Quantidade de Vendas" />
        </ListItem>
        <ListItem>
          <ListItemText primary={produto?.marca} secondary="Marca" />
        </ListItem>
      </List>
    </Box>
  );
};

export default VisualizarProdutoTemplate;
