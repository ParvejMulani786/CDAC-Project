import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import SelectionPage from './SelectionPage';

function UserLoginHome() {
    let user=useLocation();
    let nav=useNavigate();
    let us=user.state.fname+" "+user.state.lname;
    // useEffect(()=>
    // {
    //      setUser(user.state.fname);
    // })
    return (
        <>
        <div style={{paddingBottom:"50px"}}>
            Welcome {us}
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"red"}} onClick={()=>nav("/userlogin")}>Logout</button><br/><br/>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/userlogin/acceptedlist",{state:user.state})}>Accepted List</button>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/userlogin/requestlist",{state:user.state})}>Request List</button>
        </div>  
          <SelectionPage state={user.state}></SelectionPage>
        </>
    );
}

export default UserLoginHome;