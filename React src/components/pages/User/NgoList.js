import e from 'cors';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
function NgoList() {
    let loc=useLocation();
    let nav=useNavigate();
    let [showlist,setShowlist]=useState();
    let rolename;
    let roleid=loc.state.ngolist[0].role_id;
    if(roleid==1)
    {
       rolename="Child";
    }
    else if(roleid==2)
      {
        rolename="Old Age";
      }
    else if(roleid==3)
    {
      rolename="Street Dwellers";
    }
    else 
    {
      rolename="Animal";
    }
// useEffect(()=>
// {
//     // let list=loc.ngotable;

    // setShowlist(loc.state.ngolist?.map((data,index)=>
    const shlist=loc.state.ngolist?.map((data,index)=>
    {
       return( <tr>
      <td key={index}>
        <div class="d-flex align-items-center">
        
          <div class="ms-3">
           {index+1}
          </div>
        </div>
      </td>
      <td>
       <b>{data.ngo_name}</b>
      </td>
      <td> 
        {data.ngo_address.street},{data.ngo_address.city},
        {data.ngo_address.state},{data.ngo_address.pin}
      </td>
      <td>{data.ngo_email}</td>
      <td>{data.ngo_phone}</td>
      <td><button class="btn btn-primary" onClick={(()=>
       {
       let user_ngo=
       {
        user:loc.state.user,
        ngodata:data 
       }            
        nav("/userlogin/fooddetailsngo",{state:user_ngo})})}>Donate</button></td>
    </tr>
       )
    // }))
      });

    // setShowlist(list);

// },[])
    // function ngodonate()
    // {

    // }
    
    return (
        <>
        {/* <div>{loc.state.user_address.city}</div> */}
        <div style={{marginBlock:"100px",marginLeft:"100px",marginRight:"100px"}}>
        <center><h1 >List of {rolename}</h1></center>
            <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
    <th>Sr No.</th>
      <th>Name of NGO</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Donate</th>
    </tr>
  </thead>
  <tbody>
    {/* {showlist} */}
    {shlist}
  </tbody>
</table>    
        </div>
        </>
    );
}

export default NgoList;