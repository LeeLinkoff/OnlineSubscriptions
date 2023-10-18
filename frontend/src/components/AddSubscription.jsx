import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';


export default function AddSubscription(props) {
  const {open, onClose} = props

  function handleCancel() {
      onClose()
  };

  async function handleSave() {
     onClose()
  };

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form method='POST' action='https://onlinesubscriptionsapi-8fec69ac21bc.herokuapp.com/subscriptions'>
        <DialogTitle id="alert-dialog-title">
          {"Add a Subscription"}
        </DialogTitle>
        <DialogContent>
            <TextField id="name" label="Name" name="name" variant="outlined" margin="normal" />
                <br></br>
                <TextField id="cost" label="Cost" name="cost" variant="outlined" margin="normal" />
                <br></br>
                <TextField id="frequency" label="Frequency" name="frequency" variant="outlined" margin="normal" />
                <br></br>
                <TextField id="company_id" label="Company ID" name="company_id" variant="outlined" margin="normal" />
                <br></br>
            </DialogContent>
        <DialogActions>
            <Button type='submit' onClick={handleSave} >
            save
          </Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
