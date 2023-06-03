import React,{useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import hungary from "../../images/hungary.jpg"
import hands from "../../images/hungaryhands.jpg"
import ContactUs from '../Home/ContactUs';


function FoodDetails() {
  let loc=useLocation();
  let nav=useNavigate();
  let[msg,setMsg]=useState();
  

 let food_id1;
 let food_items1;
 let feed_count1;
 let feed_qty1;
 let food_quality_in_days1;
 let user_contact1;
//  let user_id1;
//  let user_name1;
//  let user_address1;
//  let ngo_id1;
//  let ngo_name1;
//  let ssi_id1;
//  let ssi_name1;
//  let status1;

     function donate(e){
      e.preventDefault();
      let data={
      food_id:0,
      food_items:food_items1,
      feed_count:feed_count1,
      feed_qty:feed_qty1,
      food_quality_in_days:food_quality_in_days1,
      user_id:loc.state.user.uid,
      user_name:loc.state.user.fname+" "+loc.state.user.lname,
      user_address:loc.state.user.address[0].street+","+loc.state.user.address[0].city+","+loc.state.user.address[0].dist+","+loc.state.user.address[0].state+", Pin-"+loc.state.user.address[0].pin,
      user_contact:loc.state.user.phone,
      ngo_id:loc.state.ngodata.ngo_id,
      ngo_name:loc.state.ngodata.ngo_name,
      ssi_id:0,
      ssi_name:null,
      ssi_contact:null,
      status:"pending",
      contact:loc.state.ngodata.ngo_phone
      }      

      axios.post("http://localhost:8000/fooddetails/addform",data).then((Response)=>{

          alert("Submitted Successfully")
         nav("/userlogin/home",{state:loc.state.user});

      });      

 }
    return (
   
      <div style={{backgroundImage: `url(${hands})`,backgroundRepeat: "no-repeat",backgroundSize: "cover",paddingBottom:"300px"}}>
      {/* <div  style={{alignItems:"end",backgroundColor:"skyblue", paddingLeft:"80px",paddingRight:"80px"}}> */}
     <center><h1 style={{color:"blue",paddingBottom:"10px"}}><marquee width="80%" direction="left" height="50px">
     <font color="#FF2626">D</font>
            <font color="#252A34">O</font>
            <font color="#753422">N</font>
            <font color="#FFD523">A</font>
            <font color="#71EFA3">T</font>
            <font color="#00C1D4">E</font>
            <font color="#71EFA3">-</font>
            <font color="#0F52BA">N</font>
            <font color="#66CC66">O</font>
            <font color="#FF9966">W</font>
            <font color="#FFCCCC">:)</font>
     </marquee></h1></center>
    {/* <div style={{float:"right",width:"50",height:"50"}} ><img src={Ngoreg} width="600" height="1000"/></div> */}
     <form style={{display:"inline-block"}}></form>
         
       
        <div style={{paddingBottom:"50px"}}>
            <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px,"}}>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5" align="centre"> Donation form</h3>
            <form>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="fooditems">Food items</label>
                    <input type="text" id="fooditems" class="form-control form-control-lg" onBlur={(e)=>food_items1=e.target.value} />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="feedcount">Feed count</label>
                    <input type="text" id="feedcount" class="form-control form-control-lg" placeholder="eg.5(person)" onBlur={(e)=>feed_count1=e.target.value} />
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                  <label for="feedqty" class="form-label">Feed quantity</label>
                    <input type="text" class="form-control form-control-lg" id="feedqty" placeholder="eg.10 chapati,1/2 kg sabji" onBlur={(e)=>feed_qty1=e.target.value} />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                <div class="form-outline datepicker w-100">
                <label for="fooddays" class="form-label">Food quality in days</label>
                    <input type="text" class="form-control form-control-lg" id="fooddays" onBlur={(e)=>food_quality_in_days1=e.target.value}  />
             
                  </div>
                  
                </div>
              </div>

             <h3><b>From</b></h3>
              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="username">User name</label>
                    <input type="email" id="username" class="form-control form-control-lg" value={loc.state.user.fname+" "+loc.state.user.lname} readOnly/>
                
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="usercontact">User contact</label>
                    <input type="tel" id="usercontact" class="form-control form-control-lg"  value={loc.state.user.phone} readOnly/>
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-12">
                
                <div class="form-outline">
                <label class="form-label" for="useradd">User address</label>
                    <input type="tel" id="useradd" class="form-control form-control-lg" value={loc.state.user.address[0].street+","+loc.state.user.address[0].city+","+loc.state.user.address[0].dist+","+loc.state.user.address[0].state+", Pin-"+loc.state.user.address[0].pin} readOnly />
               
                  </div>
                  
                </div>
            </div>
            <h3><b>To</b></h3>
            <div class="row">
                <div class="col-12">
                
                <div class="form-outline">
                <label class="form-label" for="ngoname">NGO name</label>
                    <input type="tel" id="ngoname" class="form-control form-control-lg" value={loc.state.ngodata.ngo_name} readOnly  />
                   
                  </div>
                  
                </div>
            </div>

              <div class="mt-4 pt-2">
                <button class="btn btn-primary btn-lg"  onClick={donate} >Submit</button>
              </div>
              {/* {msg} */}

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        </div>
        // </div>
        
        
        
        
    );
}

export default FoodDetails;