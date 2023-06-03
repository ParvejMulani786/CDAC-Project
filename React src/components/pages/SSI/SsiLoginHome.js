import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router';

export default function SsiLoginHome() {
    let ssi=useLocation();
    let nav=useNavigate();
     let [name,setName]=useState();
     useEffect(()=>
     {
        setName(ssi.state.ssi_name);
     })
  return (
   
     
  
    <div style={{marginBottom:"200px",marginTop:"10px"}}>
    Welcome {name}
    <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"red"}} onClick={()=>nav("/ssilogin")}>Logout</button><br/><br/>
    <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/ssilogin/acceptrejectlist",{state:ssi.state})}>Accepted/Rejected List</button>
    <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/ssilogin/requestlist",{state:ssi.state})}>Request List</button>
   </div>
        
      
    
  );
}
