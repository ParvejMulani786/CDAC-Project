import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import ngologinBack from "../../images/ngologinBack.jpg";
import ngo from "../../images/ngo.jpg";
import NGOLOGO from "../../images/NGOLOGO.jpg";





function NgoLogin(props) {
    let nav=useNavigate();
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    const cors=require("cors");
    let [msg,setMsg]=useState();
    const config={
        headers: {'Access-Control-Allow-Origin': '*'}

    }
    function handler()
    {
        if(username!="" && password!="")
        {
        axios.post("http://localhost:8000/ngo/login/"+username+"/"+password,config).then((response)=>
        {
            //let [user,setUser]=response.data
            let ngo=response.data;
            // console.log(user.lname);
            // setMsg(user.lname);
            // let name=user.fname;
          //  nav("/home",{state:{name:"siddhant"}});
          nav("/ngologin/home",{state:ngo});
            
                //nav("/home",user);
            
        }).catch((res)=>
        {
            setMsg("Invalid username/password")
        })
      }
      else{
        alert("Please Enter Credentials")
      }

    }
    return (
        
     
     <>
     <div style={{backgroundImage:`url(${ngologinBack})`,backgroundRepeat:'no-repeat',width:'100%'}}>
     <section class="h-100 gradient-form" style={{backgroundColor: "#eee"}} />
     
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-6">

                <div class="text-center">
                  <img src={NGOLOGO}
                    style={{width: "255px" ,alt:"logo"}} />
                  <h4 class=" mb-100 pb-5">NGO Login</h4>
                </div>

                <form>
                  <b><p>Please login to your account</p></b>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example11">Username</label>

                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" onBlur={(e)=>(setUsername(e.target.value))} required/>
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example22">Password</label>

                    <input type="password" id="form2Example22" class="form-control" onBlur={(e)=>(setPassword(e.target.value))} required/>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4" type="button"
                    onClick={handler}>Login</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div style={{paddingLeft:"12px"}} class="col-lg-6 d-flex align-items-center gradient-custom-2">
            
            <img src={ngo} style={{width:"390px"}}/>
            
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<section/>
<div/>
  
     </>
    );
}

export default NgoLogin;