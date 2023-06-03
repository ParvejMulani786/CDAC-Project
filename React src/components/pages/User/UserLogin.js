import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import Ngochild from '../../images/ngoreg.jpg';
import Config from '../../Config/config'

function UserLogin(props) {
    let nav=useNavigate();
    // let loc=useLocation();
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    const cors=require("cors");
    let [msg,setMsg]=useState();
    // const config={
    //     headers: {'Access-Control-Allow-Origin': '*'}

    // }
    function handler()
    {
        if(username!="" && password!="")
        {
        axios.post("http://localhost:8000/user/login/"+username+"/"+password,Config).then((response)=>
        {
            //let [user,setUser]=response.data
            let user=response.data;
            console.log(user.lname);
            // setMsg(user.lname);
            let name=user.fname;
            if(user!=null)
            {
          //  nav("/home",{state:{name:"siddhant"}});
          nav("/userlogin/home",{state:user});
            }else{
              setMsg("Invalid username/password")
            }
            
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
        <div style={{backgroundColor: "#9A616D",paddingBottom:"100px"}}>
        <section class="vh-100"  >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src={Ngochild}
                alt="login form" class="img-fluid"  />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                    <span class="h1 fw-bold mb-0">User LogIn</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Sign into your account</h5>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example17">Email address or Phone</label>
                    <input type="email" id="form2Example17" class="form-control form-control-lg" onBlur={(e)=>setUsername(e.target.value)}/>
                    
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example27">Password</label>
                    <input type="password" id="form2Example27" class="form-control form-control-lg" onBlur={(p)=>setPassword(p.target.value)}/>
                    
                  </div>
                 <div>{msg}</div>
                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button" onClick={handler}>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <a href="/userregister"
                      style={{color: "#393f81;"}}>Register here</a></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
        </>
    );
}

export default UserLogin;