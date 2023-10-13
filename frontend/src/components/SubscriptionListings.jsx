import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MDBBtn} from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const response = await fetch('http://127.0.0.1:81/subscriptions');
var rows = await response.json();

export default function SubscriptionListings(props) {
  const {open, onClose} = props

    function handleClose() {
      onClose()
  };

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          {"subscription listings"}
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
      <Table width="100" aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor: 'powderblue'}}>
            <TableCell>Name </TableCell>
            <TableCell align="left">frequency</TableCell>
            <TableCell align="center">cost</TableCell>
          </TableRow>
        </TableHead >
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.frequency}</TableCell>
              <TableCell align="center">{row.cost}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
