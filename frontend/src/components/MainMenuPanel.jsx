import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

import SubscriptionListings from './SubscriptionListings';
import DeleteSubscription from './DeleteSubscription';
import AddSubscription from './AddSubscription';
import EditSubscription from './EditSubscription';

export default function MainMenuPanel() {

  const [openListSubscriptions, setOpenListSubscription] = React.useState(false);
  const [openDeleteSubscription, setOpenDeleteSubscription] = React.useState(false);
  const [openAddSubscription, setOpenAddSubscription] = React.useState(false);
  const [openEditSubscription, setOpenEditSubscription] = React.useState(false);


  function handleClickOpenListSubscriptions(){
    setOpenListSubscription(true);
  };

  function handleClickCloseListSubscriptions(){
    setOpenListSubscription(false);
  };


  function handleClickOpenAddSubscription(){
    setOpenAddSubscription(true);
  }; 

  function handleClickCloseAddSubscription(){
    setOpenAddSubscription(false);
  };


  function handleClickOpenEditSubscription(){
    setOpenEditSubscription(true);
  };

  function handleClickCloseEditSubscription(){
    setOpenEditSubscription(false);
  };


  function handleClickOpenDeleteSubscription(){
    setOpenDeleteSubscription(true);
  };

  function handleClickCloseDeleteSubscription(){
    setOpenDeleteSubscription(false);
  };


  return (
    <MDBRow>
      <MDBCol sm='8' className='mb-3 mb-md-0'>
        <MDBCard>
          <MDBCardBody text='dark'>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpenListSubscriptions}>list of subscriptions</MDBBtn>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpenAddSubscription}>add subscription</MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpenEditSubscription}>edit subscription</MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpenDeleteSubscription}>delete subscription</MDBBtn>
            <SubscriptionListings open={openListSubscriptions}
                                  onClose={handleClickCloseListSubscriptions}/>
            <DeleteSubscription open={openDeleteSubscription}
                                onClose={handleClickCloseDeleteSubscription}/>
            <AddSubscription open={openAddSubscription}
                             onClose={handleClickCloseAddSubscription}/>
            <EditSubscription open={openEditSubscription}
                              onClose={handleClickCloseEditSubscription}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}