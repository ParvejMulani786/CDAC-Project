import e from 'cors';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
function SsiList() {
    let loc=useLocation();
    let nav=useNavigate();
    let [showlist,setShowlist]=useState();
// useEffect(()=>
// {
    
    let list= loc.state.ssilist?.map((data,index)=>
    {
       return( <tr key={index}>
      <td >
        <div class="d-flex align-items-center">
        
          <div class="ms-3">
           {index+1}
          </div>
        </div>
      </td>
      <td>
       <b>{data.ssi_name}</b>
      </td>
      <td> 
        {data.ssi_Address.street},{data.ssi_Address.city},
        {data.ssi_Address.state},{data.ssi_Address.pin}
      </td>
      <td>{data.ssi_email}</td>
      <td>{data.ssi_phone}</td>
      <td><button class="btn btn-primary" onClick={(()=>
       {
       let user_ssi=
       {
        user:loc.state.user,
        ssi:data 
       }      
       
        nav("/userlogin/fooddetailsssi",{state:user_ssi})})}>Donate</button></td>
    </tr>
       )
    })

   // setShowlist(list);

// },[])
   
    
    return (
        <>
        {/* <div>{loc.state.user_address.city}</div> */}
        <div style={{marginBlock:"100px",marginLeft:"100px",marginRight:"100px"}}>
        <center><h1 >List of Small Scale Industry</h1></center>
            <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
    <th>Sr No.</th>
      <th>Name of SSI</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Donate</th>
    </tr>
  </thead>
  <tbody>
    {list}
  </tbody>
</table>    
        </div>
        </>
    );
}

export default SsiList;