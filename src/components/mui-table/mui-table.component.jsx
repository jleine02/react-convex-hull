import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(algorithm, numberOfPoints, runTime, pointCoords, hullCoords) {
  return { algorithm, numberOfPoints, runTime, pointCoords, hullCoords };
}

const rows = [
  createData('NAIVE', 200, 20.0, '{}', '{}'),
  createData('GRAHAM SCAN', 200, 10.0, '{}', '{}'),
  createData('OUTPUT AWARE', 200, 16.0, '{}', '{}'),
];

const DenseTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>ALGORITHM</b></TableCell>
            <TableCell align="right"><b>NUMBER OF POINTS</b></TableCell>
            <TableCell align="right"><b>RUN TIME (SECONDS)</b></TableCell>
            <TableCell align="right"><b>ALL POINT COORDS</b></TableCell>
            <TableCell align="right"><b>CONVEX HULL COORDS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.algorithm}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.algorithm}
              </TableCell>
              <TableCell align="right">{row.numberOfPoints}</TableCell>
              <TableCell align="right">{row.runTime}</TableCell>
              <TableCell align="right">{row.pointCoords}</TableCell>
              <TableCell align="right">{row.hullCoords}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;