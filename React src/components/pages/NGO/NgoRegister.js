import React, { useState } from 'react';
import axios from "axios";
import ngoform from "../../images/ngoform.jpg";

function NgoRegister(props) {

    let [msg,setMsg]=useState();
    let [confirm,setConfirm]=useState('');
   
    let username1;
    let ngoname1;
    let contact1;
    let street1;
    let city1;
    let dist1;
    let state1;
    let pin1;
    let time1;
    let role1=1;
    let pass1;
    let pass2;
    let email1;
    let confpass;

    function create()
    {
            
        if(pass1===pass2)
        {
            confpass=pass2
            let data={
              
                ngo_id:0,
                ngo_name:ngoname1,
                role_id:role1, 
                ngo_phone:contact1, 
                ngo_email:email1,
                ngo_time:time1,
                ngo_username:username1,
                ngo_password:confpass,
                ngo_address:{
                  street:street1,
                  city:city1,
                  district:dist1,
                  state:state1,
                  pin:pin1,
                  ngo_aid:0}       
              }
            axios.post("http://localhost:8000/ngo/register",data).then((response)=>
            {
               setConfirm(response.data)
               alert(response.data)
    
            })
        }
        else{
          setMsg("Please Enter Correct Password")
        }
       
    }
    
    return (
        <>
        <section class="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
  <div  class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-10">
      <div class="col-lg-8 col-xl-20">
        <div class="card rounded-3">
          <img src={ngoform}
            class="w-100" 
            alt="Sample photo"/>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form class="px-md-2">

              <div class="row ">
              <div class="col-md-16 mb-4">
              <label class="form-label" for="form3Example1q">NGO Name</label>
                <input type="text" id="form3Example1q" class="form-control"  onBlur={(e)=>ngoname1=e.target.value}/>
                </div>
              </div>             
              

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline datepicker">
                  <label for="exampleDatepicker1" class="form-label">Contact No</label>

                    <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>contact1=e.target.value}/>
                  </div>

                </div>

                <div class="col-md-6 mb-4">

                  <div class="form-outline datepicker">
                  <label for="exampleDatepicker1" class="form-label">Email</label>

                    <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>email1=e.target.value} />
                  </div>

                </div>

               
                <div class="col-md-6 mb-4">
                <b>NGO Working for :</b>
                <div class="col-md-6 mt-3 mb-3">
                <select class="select" onChange={(e)=>role1=e.target.value} >
                    <option value="1">Child</option>
                    <option value="2">Old Age</option>
                    <option value="3">Street Dwellers</option>
                    <option value="4">Animal</option>
                  </select>
                </div>
                  </div>
              </div>

            

              <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                <b>Address</b>
                <div class="col-md-6 mt-4 mb-4">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">Street</label>

                  <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>street1=e.target.value}/>
                </div>

                </div>
                <div class="col-md-6 mb-4 mt-4">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">City</label>

                  <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>city1=e.target.value} />
                </div>

                </div>
                <div class="col-md-6 mb-4 ">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">District</label>

                  <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>dist1=e.target.value} />
                </div>

                </div>
                <div class="col-md-6 mb-4">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">State</label>

                  <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>state1=e.target.value}/>
                </div>

                </div>
                <div class="col-md-6 mb-2">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">Pin</label>

                  <input type="text" class="form-control" id="exampleDatepicker1" onBlur={(e)=>pin1=e.target.value}/>
                </div>

                </div>
                <div class="col-md-6 mb-2">

                <div class="form-outline datepicker">
                <label for="exampleDatepicker1" class="form-label">NGO Time</label>

                  <input type="text" class="form-control" placeholder="eg. 9am-5pm" id="exampleDatepicker1" onBlur={(e)=>time1=e.target.value}/>
                </div>

                </div>
                
              </div>

              <div class="row ">
              <div class="col-md-16 mb-4">
              <label class="form-label" for="form3Example1q">Username </label>
                <input type="text" id="form3Example1q" class="form-control" onBlur={(e)=>username1=e.target.value}/>
                </div>
              </div> 
              <div class="row ">
              <div class="col-md-16 mb-4">
              <label class="form-label" for="form3Example1q">Password</label>
                <input type="password" id="form3Example1q" class="form-control" onBlur={(e)=>pass1=e.target.value}/>
                </div>
              </div> 
              <div class="row ">
              <div class="col-md-16 mb-4">
              <label class="form-label" for="form3Example1q">Confirm Password</label>
                <input type="password" id="form3Example1q" class="form-control" onBlur={(e)=>pass2=e.target.value}/>
                </div>
              </div>  

              <button type="submit" class="btn btn-success btn-lg mb-1" onClick={create}>Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    );
}

export default NgoRegister;