import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation , useNavigation} from "react-router-dom";
import {Link} from "react-router-dom";

function UserRegister() {
    let loc=useLocation();
  let [res,setRes]=useState();
    let fname1;
    let lname1;
    let phone1;
    let email1;
    let street1;
    let city1;
    let dist1;
    let state1;
    let pin1;
    let role1=1;
    let pass1;
    let pass2;

    let config={
      headers: { 'Content-Type': 'application/json' }
    }

    function create()
    {
      if(pass1===pass2)
      {
        let user={
          uid:0,
          fname:fname1,
          lname:lname1,
          phone:phone1,
          email:email1,
          password:pass1,
          role:role1 ,
          address:[{
          aid:0,
          street:street1,
          city:city1,
          dist:dist1,
          state:state1,
          pin:pin1}]
          
          }    
        
        // console.log("sid")
        axios.post("http://localhost:8000/user/register",user,config).then((response)=>
        {
          
          setRes(response.data);
          console.log(res)
          alert(response.data)

        }).catch(()=>
        {
          alert("Not Registered")
        })
      }
      else{
        alert("Please Enter Correct Password")
      }
    }
   
    return (
     <>
      <section class="h-100 h-custom gradient-custom-2">
     <center><h1 style={{color:"blue",paddingBottom:"10px"}}><marquee width="80%" direction="left" height="50px">
     <font color="#753422">REGISTER HERE!!</font>
            {/* <font color="#252A34">e</font>
            <font color="#753422">N</font>
            <font color="#FFD523">A</font>
            <font color="#71EFA3">T</font>
            <font color="#00C1D4">E</font>
            <font color="#71EFA3">-</font>
            <font color="#0F52BA">N</font>
            <font color="#66CC66">O</font>
            <font color="#FF9966">W</font>
            <font color="#FFCCCC">:)</font> */}
     </marquee></h1></center>
 <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div class="card-body p-0">
            <div class="row g-0">
            <div class="col-lg-6">
                <div class="p-5">
                  <h3 class="fw-normal mb-5" style={{color:"navy"}}>Registration  for user</h3>

                 <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">First name</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>fname1=e.target.value} />
                        
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Last name</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>lname1=e.target.value}/>
                       
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">Contact</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>phone1=e.target.value}/>
                        
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Email</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>email1=e.target.value} />
                       
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">Password</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>pass1=e.target.value} />
                       
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Confirm password</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>pass2=e.target.value}/>
                       
                      </div>

                    </div>
                  </div>
                  <div class="row">

                  <div class="mb-4 pb-2">
                  <label for="cars"><b>Role Of User :</b></label><br/>
                  <select name="cars" id="cars">
                      <option value="1">Residential Society</option>
                      <option value="2">Restaurant</option>
                      <option value="3">Mandis</option>
                      <option value="4">Farmer</option>
                      <option value="5">Municipality</option>
                      <option value="6">Others</option>
                  </select>
                  </div>
                  </div>


                 </div>
              </div>
              <div class="col-lg-6 bg-indigo text-white">
                <div class="p-5">
                  <h3 class="fw-normal mb-5">Address Details</h3>

                  <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                    <label class="form-label" for="form3Examplea2">Street</label>
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" onBlur={(e)=>street1=e.target.value}/>
                     
                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                    <label class="form-label" for="form3Examplea3">City</label>
                      <input type="text" id="form3Examplea3" class="form-control form-control-lg" onBlur={(e)=>city1=e.target.value}/>
                     
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline form-white">
                      <label class="form-label" for="form3Examplea4">District</label>
                        <input type="text" id="form3Examplea4" class="form-control form-control-lg " onBlur={(e)=>dist1=e.target.value} />
                        
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div class="form-outline form-white">
                      <label class="form-label" for="form3Examplea5">State</label>
                        <input type="text" id="form3Examplea5" class="form-control form-control-lg"onBlur={(e)=>state1=e.target.value} />
                        
                      </div>

                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                    <label class="form-label" for="form3Examplea6">Pin code</label>
                      <input type="text" id="form3Examplea6" class="form-control form-control-lg" onBlur={(e)=>pin1=e.target.value} />
                      
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4 pb-3">
                    <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label text-white" for="form2Example3">
                      I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                      site.
                    </label>
                  </div>

                  <button type="button" class="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark" onClick={create}>Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     </>
    );
}

export default UserRegister;