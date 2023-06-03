import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import Composting from '../../images/composting.jpg';
import Config from '../../Config/config'
import { Link } from 'react-router-dom';



function UserLogin() {
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
        axios.get("http://localhost:8000/ssi/login/"+username+"/"+password,config).then((response)=>
        {
            //let [user,setUser]=response.data
            let ssi=response.data;
            //console.log(user.lname);
            // setMsg(user.lname);
            let name=ssi.ssi_name;
            if(ssi!=null)
            {
               nav("/ssilogin/home",{state:ssi});
            }else{
              setMsg("Invalid username/password")
            }

            
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
  <div style={{backgroundColor:"bisque",paddingBottom:"100px",paddingTop:"50px",paddingRight:"300px"}}>
  <section class="vh-100" style={{marginLeft:"100px"}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: "#709085;"}}></i>
          <span class="h1 fw-bold mb-0">Small Scale Industry</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: "30rem",height:"60rem"}}>

            <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "2px;"}}>Log in</h3>

            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example18">UserName</label>
              <input type="email" id="form2Example18" class="form-control form-control-lg" onBlur={(e)=>setUsername(e.target.value)} />
              
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example28">Password</label>
              <input type="password" id="form2Example28" class="form-control form-control-lg" onBlur={(e)=>setPassword(e.target.value)} />
              
            </div>
            <div>{msg}</div>
            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button" onClick={handler}>Login</button>
            </div>

            <Link to="/ssiregister">  <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p></Link>
            <p>Don't have an account? <a href="/ssiregister" class="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src={Composting}
          alt="Login image"  style={{objectFit: "cover", objectPosition: "left",width:"600px",height:"600px",paddingTop:"10px"}}/>
      </div>
    </div>
  </div>
</section>
</div>
  </>
  
    );
}

export default UserLogin;