import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';


export default function EditSubscription(props) {
  const {open, onClose} = props
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [fetchedId, setFetchedId] = useState("");
  const [fetchedName, setFetchedName] = useState("");
  const [fetchedCost, setFetchedCost] = useState(""); 
  const [fetchedFrequency, setFetchedFrequency] = useState("");
  const [fetchedCompanyId, setFetchedCompanyId] = useState("");

  function onChangeInput(value, setValue)
  {
    console.log("onChangeInput: " + value + ", " + setValue);
    setValue(value);
  }

  useEffect(() => {
      const getSubscriptions = async () => {
        const res = await fetch("https://onlinesubscriptionsapi-8fec69ac21bc.herokuapp.com/subscriptions", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        const response = await res.json();
        console.log("getSubscriptions(), response as json: " + JSON.stringify(response));
        setSubscriptions(response);
      }
      getSubscriptions();
  }, [])

  async function getSelectedSubscription(selectId){
      console.log("getSelectedSubscription(), selectId: " + selectId);
      const res = await fetch("https://onlinesubscriptionsapi-8fec69ac21bc.herokuapp.com/subscriptions/" + selectId, {
              method: 'GET',
              headers: {'Content-Type': 'application/json'},
          })
      let row = await res.json();
      if ( (row !== undefined) && (row.length > 0) )
      {
        console.log("getSelectedSubscription(), row: " + JSON.stringify(row));
        console.log("getSelectedSubscription(), response as json: " + JSON.stringify(row[0]));
        console.log("getSelectedSubscription(), subscription id: " + selectId);
        const {id, name, cost, frequency, company_id} = row[0];
        setSelectedId(selectId);
        setFetchedId(id);
        setFetchedName(name);
        setFetchedCost(cost);
        setFetchedFrequency(frequency);
        setFetchedCompanyId(company_id);
        console.log("getSelectedSubscription(), id: " + id);
        console.log("getSelectedSubscription(), name: " + name);
        console.log("getSelectedSubscription(), cost: " + cost);
        console.log("getSelectedSubscription(), frequency: " + frequency);
        console.log("getSelectedSubscription(), company_id: " + company_id);
      }
   };

  function handleCancel() {
      onClose()
  };

  async function handleSave() {
      onClose()
  };

  return (
      <Dialog open={open}
              onClose={handleCancel}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
        <form method='POST' action={"https://onlinesubscriptionsapi-8fec69ac21bc.herokuapp.com/subscriptions/"+ selectedId}>
            <DialogTitle id="alert-dialog-title">
              {"Edit a Subscription"}
            </DialogTitle>
            <DialogContent>
              <InputLabel id="select-subscription-label">Subscriptions</InputLabel>
              <Select labelId="select-subscription-label"
                      id="select-subscription-filled"
                      value={selectedId}
                      onChange={(ev) => getSelectedSubscription(ev.target.value)}
                      sx={{ minWidth: 160 }}>
                {subscriptions.map((subscription) =>
                  <MenuItem key={subscription.id} value={subscription.id}>{subscription.name}</MenuItem>
                )}
              </Select>
              <br/><br/>
              <div>
                <TextField value={fetchedName} id="name" label="Name" name="name" variant="outlined" margin="dense" onChange={(e) => onChangeInput(e.target.value, setFetchedName)}/>
                <br></br>
                <TextField value={fetchedCost} id="cost" label="Cost" name="cost" variant="outlined" margin="normal" onChange={(e) => onChangeInput(e.target.value, setFetchedCost)}/>
                <br></br>
                <TextField value={fetchedFrequency} id="frequency" label="Frequency" name="frequency" variant="outlined" margin="normal" onChange={(e) => onChangeInput(e.target.value, setFetchedFrequency)}/>
                <br></br>
                <TextField value={fetchedCompanyId} id="company_id" label="Company ID" name="company_id" variant="outlined" margin="normal" onChange={(e) => onChangeInput(e.target.value, setFetchedCompanyId)}/>
              </div>
            </DialogContent>
            <DialogActions>
                <Button type='submit' onClick={handleSave}>save</Button>
                <Button onClick={handleCancel}>cancel</Button>
            </DialogActions>
        </form>
      </Dialog>
  );
}
