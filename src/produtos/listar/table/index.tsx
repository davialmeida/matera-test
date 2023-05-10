import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NumberUtils from '@/utils/number';

import ListarProdutosContext from '../contexts/listar-produtos-context';
import { ProductImage, ProductName, ViewButton } from './styles';

const PagedProdutoTable: React.FC = () => {
  const { produtos } = useContext(ListarProdutosContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const navigate = useNavigate();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Estoque</TableCell>
            <TableCell>Vendas</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((produto) => (
              <TableRow key={produto.id}>
                <TableCell component="th" scope="row">
                  <ProductName>
                    <ProductImage
                      /*src={produto.avatar} */
                      src={`https://picsum.photos/id/${produto.id}/400/300`}
                      alt=""
                    />
                    {produto.nome}
                  </ProductName>
                </TableCell>
                <TableCell>
                  {NumberUtils.maskMoneyBRL(produto.preco?.toString())}
                </TableCell>
                <TableCell>{produto.qt_estoque}</TableCell>
                <TableCell>{produto.qt_vendas}</TableCell>
                <TableCell>{produto.marca}</TableCell>
                <TableCell align="right">
                  <ViewButton
                    onClick={() => navigate(`/produtos/visualizar/${produto.id}`)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[15, 30]}
        component="div"
        count={produtos?.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Produtos por página"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default PagedProdutoTable;
