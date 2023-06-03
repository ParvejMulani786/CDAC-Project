import React from 'react';
import  ReactDOM  from 'react-dom/client';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SsiRegister(props) {
  let [msg, setMsg] = useState();
  let [confirm, setConfirm] = useState('');

  let username1;
  let ssiname1;
  let contact1;
  let street1;
  let city1;
  let dist1;
  let state1;
  let pin1;
  let time1;
  
  let pass1;
  let pass2;
  let email1;
  let confpass;
  function create() {

    if (pass1 === pass2) {
      confpass = pass2
      let data ={
        ssi_id: 0,
        ssi_username: username1,
        ssi_password: pass1,
        ssi_name: ssiname1 ,
        ssi_phone: contact1,
        ssi_email: email1,
        ssi_time: time1,
        ssi_Address: {
            ssi_aid: 0,
            street: street1,
            city: city1,
            district: dist1,
            state: state1,
            pin:pin1, 
        }
    }
      axios.post("http://localhost:8000/ssi/register", data).then((response) => {
        setConfirm(response.data)
        alert(response.data)

      })
    }
    else {
      setMsg("Please Enter Correct Password")
    }

  }


  return (
    <>
    <div style={{background:"pink",paddingBottom:"50px"}}>
      <section class="vh-100 gradient-custom" style={{paddingBottom:"1000px"}}>
        <div class="container py-5 h-100" >
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">SSI Registration Form</h3>
                  <form >

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="firstName">SSI Name</label>
                          <input type="text" id="form6Example1" class="form-control" onBlur={(e) => ssiname1 = e.target.value} />
                        
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="lastName">Contact</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => contact1 = e.target.value} />
                         
                        </div>
                        
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="firstName">Username</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => username1 = e.target.value} />
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="firstName">Email</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => email1 = e.target.value} />
                         
                        </div>
                        </div>
                      </div>
                      <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="firstName">Password</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => pass1 = e.target.value} />
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="firstName">Confirm Password</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => pass2 = e.target.value}/>
                          
                        </div>
                        </div>
                      </div>
                      <div class="row">
                      <div class="col-md-6 mb-4">
                     <div class="form-outline">
                        <label class="form-label" for="firstName">Time</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => time1 = e.target.value}  placeholder="eg. 10am-5pm"/>
                          
                        </div>
                        </div>
                    </div>
                      <b>Address</b>
                      <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="firstName">Street</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => street1 = e.target.value} />
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="firstName">City</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => city1 = e.target.value} />
                          
                        </div>
                        </div>
                      </div>
                      
                      <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <label class="form-label" for="firstName">District</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => dist1 = e.target.value} />
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="firstName">State</label>
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => state1 = e.target.value} />
                          
                        </div>
                        </div>
                      </div>
                      <div class="row">
                      <div class="col-md-6 mb-4">
                     <div class="form-outline">
                        <label class="form-label" for="firstName">Pin</label>
                          <input type="number" id="form6Example2" class="form-control" onBlur={(e) => pin1= e.target.value}  />
                          
                        </div>
                        </div>
                    </div>
                      <div class="mt-4 pt-2">
                      <button type="submit" class="btn btn-primary btn-block mb-4" onClick={create} >Create </button>
                      <Link to="/home"><button type="submit" class="btn btn-primary btn-block mb-4" >Cancel</button></Link>
                    </div>
                  </form>
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

