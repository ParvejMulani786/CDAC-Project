import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

function NgoAcceptRejectList(props) {
    let loc=useLocation();
    let nav=useNavigate();
    let requestdata;
    let [requestlist,setRequest]=useState();
    let ssiid=loc.state.ssi_id;
    let [requestfood,setRequestfood]=useState();
    useEffect(()=>
    {
        axios.get("http://localhost:8000/fooddetails/showconlisttossi/"+ssiid).then((response)=>
        {
            //   alert(response.data)
              requestdata=response.data;
              if(requestdata!=null)
              {
              setRequest(requestdata?.map((data,index)=>
              {
                if(data.status==="accepted")
                    {
                return(
                    
                <div>
                    <h5 class="card-header">User Name:- {data.user_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">User Contact:- {data.user_contact}</h5>
                    <h5 class="card-title">User Address:- {data.user_address}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"green"}}>Accepted</div>
                </div>
                </div>
                )}
                else 
                {
                    return(
                        <div>
                    <h5 class="card-header">User Name:- {data.user_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">User Contact:- {data.user_contact}</h5>
                    <h5 class="card-title">User Address:- {data.user_address}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"red"}}>Rejected</div>
                </div>
                </div>
                    )
                }
              }
              ))
            }
            else{
                setRequest(<center>Empty</center>)
              }
            }).catch(()=>setRequest(<center>Empty</center>))
        },[])
    return (
        <>
        <div>
            
            {/* <div>{loc.state.fname}</div>
            <div>{loc.state.uid}</div> */}
            {/* <button onClick={nav("/userlogin/home")}>Home</button> */}
            <div >
                <div class="card" style={{marginBlock:"20px",marginLeft:"70px",marginRight:"70px"}}>
        {requestlist}
        </div>
            </div>
            
       </div>
        </>
    );
}

export default NgoAcceptRejectList;