import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

function RequestList(props) {
    let loc=useLocation();
    let nav=useNavigate();
    let requestdata;
    let [requestlist,setRequest]=useState();
    let ngoid=loc.state.ngo_id;
    let [foodid,setFoodid]=useState();
    let [requestfood,setRequestfood]=useState();
    let [status,setStatus]=useState();
  
    function acceptHandler(id)
    {
        axios.get("http://localhost:8000/fooddetails/confirmlistngo/"+id).then(()=>
        {
            alert("Confirmed");
            
        }).catch(()=>
        {
            alert("404")
        })
    }

    function rejectHandler(id)
    {
        axios.get("http://localhost:8000/fooddetails/rejectlistngo/"+id).then(()=>
        {
            alert("Confirmed");
            
        }).catch(()=>
        {
            alert("404")
        })
    }

    useEffect(()=>
    {
        axios.get("http://localhost:8000/fooddetails/showreqlisttongo/"+ngoid).then((response)=>
        {
            //   alert(response.data)
              requestdata=response.data;
              if(requestdata!=null)
              {
              setRequest(requestdata?.map((data,index)=>
              {
                return(
                <div key={index}>
                    <h5 class="card-header">User Name:- {data.user_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">User Contact:- {data.user_contact}</h5>
                    <h5 class="card-title">User Address:- {data.user_address}</h5>
                    <p class="card-text"><b>Food Details:- </b>{data.food_items}<br/>
                    {data.feed_qty}</p>
                    {/* ({status}?<div class="badge badge-success rounded-pill d-inline" >{status}</div> */}
                    <button class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"green"}} onClick={(()=>
                        {
                            setFoodid(data.food_id);
                            acceptHandler(data.food_id);

                        })}>Accept</button>
                        <button class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"red"}} onClick={(()=>
                        {
                            setFoodid(data.food_id);
                            rejectHandler(data.food_id);

                        })}>Reject</button>

                </div>
                </div>
            
            )
              }))
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

export default RequestList;