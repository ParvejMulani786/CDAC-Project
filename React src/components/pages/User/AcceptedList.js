import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

function AcceptedList(props) {
    let loc=useLocation();
    let nav=useNavigate();
    let requestdata;
    let [acceptrejectlist,setAcceptReject]=useState();
    let userid=loc.state.uid;
    let [requestfood,setRequestfood]=useState();
    useEffect(()=>
    {
        axios.get("http://localhost:8000/fooddetails/showconfirmlist/"+userid).then((response)=>
        {
            //   alert(response.data)
              requestdata=response.data;
              if(requestdata!=null)
              {
              setAcceptReject(requestdata?.map((data,index)=>
              {
                if(data.status==="accepted")
                    {
                if(data.ngo_id!=0)
                {
                return(
                    
                <div>
                    <h5 class="card-header">NGO Name:- {data.ngo_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">NGO Contact:- {data.contact}</h5>
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
                    <h5 class="card-header">SSI Name:- {data.ssi_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">SSI Contact:- {data.ssi_contact}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"green"}}>Accepted</div>
                </div>
                </div>)

                }
            }
                else 
                {
                if(data.ngo_id!=0)
                {
                    return(
                        <div>
                    <h5 class="card-header">NGO Name:- {data.ngo_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">NGO Contact:- {data.contact}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"red"}}>Rejected</div>
                </div>
                </div>
                    )
                }
                else
                {
                    return(
                    <div>
                    <h5 class="card-header">SSI Name:- {data.ssi_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">SSI Contact:- {data.ssi_contact}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"red"}}>Rejected</div>
                </div>
                </div>)

                }
                }
              }
              ))
            }
            else{
                setAcceptReject(<center>Empty</center>)
              }
            }).catch(()=>setAcceptReject(<center>Empty</center>))
        },[])
    return (
        <>
        <div>
            
            {/* <div>{loc.state.fname}</div>
            <div>{loc.state.uid}</div> */}
            {/* <button onClick={nav("/userlogin/home")}>Home</button> */}
            <div >
                <div class="card" style={{marginBlock:"20px",marginLeft:"70px",marginRight:"70px"}}>
        {acceptrejectlist}
        </div>
            </div>
            
       </div>
        </>
    );
}

export default AcceptedList;