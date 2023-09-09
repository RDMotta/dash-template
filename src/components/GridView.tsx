import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from "@mui/material";
import Typography from '@mui/material/Typography';

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

interface GridViewProps {
    columns: Array<Column>;
    rows: any[];
    rowsPerPageOptions: Array<number>; 
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.background.default}; 
  }
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
`;

export default function GridView({ columns, rows, rowsPerPageOptions }: GridViewProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const theme = useTheme();
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>        
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader>  
            <TableHead sx={{border: '2px' }}>
              <TableRow>
                {columns.map((column, index) => (
                  <StyledTableCell  key={index} align={column.align}>                    
                    <Typography
                      fontWeight="bold"
                      fontSize="0.85rem" 
                    >
                    {column.label}
                    </Typography>
                  </StyledTableCell>                  
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <StyledTableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={index}
                      >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Typography color="textPrimary">
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                            </Typography>
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ rowsPerPageOptions }
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: theme.palette.primary.main }}
        />
      </Paper>
    );
  }