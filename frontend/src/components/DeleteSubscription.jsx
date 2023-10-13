import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";


export default function DeleteSubscription(props) {
  const {open, onClose} = props
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState("");

    async function handleRemove() {
       const res = await fetch("http://127.0.0.1:81/subscriptions/" + selectedSubscription, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
      console.log("selected id: " + selectedSubscription)
      console.log(res);
      window.location.reload();
      onClose()
  };

  function handleCancel() {
      onClose()
  };

  useEffect(() => {

      const getSubscriptions = async () => {
        const res = await fetch("http://127.0.0.1:81/subscriptions", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        console.log(res);
        
        const response = await res.json();
        console.log(response);
        setSubscriptions(response);
      }
      getSubscriptions();
  }, [])

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleRemove}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          {"delete a subscription"}
        </DialogTitle>
        <DialogContent>
          <InputLabel id="select-subscription">Subscriptions</InputLabel>
        <Select
      labelId="select-subscription-filled-label"
      id="select-subscription-filled"
      value={selectedSubscription}
      onChange={(ev) => setSelectedSubscription(ev.target.value)}
    >
      <MenuItem key={0} value="">
        <em>None</em>
      </MenuItem>
      {subscriptions.map((subscription) =>
        <MenuItem key={subscription.id} value={subscription.id}>{subscription.name}</MenuItem>
      )}
    </Select>
          </DialogContent>
        <DialogActions>
            <Button onClick={handleRemove}>
            remove
          </Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
