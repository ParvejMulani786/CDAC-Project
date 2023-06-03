import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

function NgoLoginHome(props) {
    let nav=useNavigate();
    let ngo=useLocation();
    let [us,setNgo]=useState();
    useEffect(()=>
    {
         setNgo(ngo.state.ngo_name);
    })
    return (
        <div style={{marginBottom:"200px",marginTop:"10px"}}>
            Welcome {us}
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"red"}} onClick={()=>nav("/ngologin")}>Logout</button><br/><br/>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/ngologin/acceptrejectlist",{state:ngo.state})}>Accepted/Rejected List</button>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/ngologin/requestlist",{state:ngo.state})}>Request List</button>
        </div>
    );
}

export default NgoLoginHome;