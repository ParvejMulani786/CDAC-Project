import axios from 'axios';
import React, { useState } from 'react';
import Ngochild from '../../images/ngo1.jpeg';
import Ssiimg from '../../images/ssi.jpg';

import Config from '../../Config/config'
import { useNavigate } from 'react-router';
function SelectionPage(props) {

    let userdata=props.state;
    let role1=1;
    
    let nav=useNavigate();
    
    function ngohandler()
    {
        axios.get("http://localhost:8000/ngo/ngolist/"+role1,Config).then((response)=>
        {
           let lst=response.data;
           let fooddata=
                {
                   user:userdata,
                    ngolist:lst
                }
           nav("/userlogin/ngolist",{state:fooddata});
        }).catch(()=>
        {
            alert("Not Found")
        })

    }

    function ssihandler()
    {
        axios.get("http://localhost:8000/ssi/ssilist/",Config).then((response)=>
        {
           let lst=response.data;
           if(lst!=null)
           {
           let fooddata=
           {
               user:userdata,
               ssilist:lst
           }
           nav("/userlogin/ssilist",{state:fooddata});
        }
        else{
            alert("No list Found");
        }
        }).catch(()=>
        {
            alert("Not Found")
        })

    }
    return (
        <div>
            {/* <div>{userdata.fname}</div>
              <div style={{marginBottom:"50px"}}></div> */}
              <div class="container-fluid">
         <div class="row" style={{marginBottom:"500px"}}>
            <div class="col-sm-6">
        <div   class="card" style={{width:400,height:100,marginLeft:"150px"}}>
            
        <img class="card-img-top" src={Ngochild} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title"><i>NGO(Non-Goverment Organisation)</i></h5>
            <p class="card-text">NGO stands for non-governmental organization. While there is no universally agreed-upon definition of an NGO, typically it is a voluntary group or institution with a social mission, which operates independently from the government. NGOs or similar organizations exist in all parts of the world.</p>
       <div style={{marginBottom:"10px"}}>
        <select onChange={(e)=>role1=e.target.value} >
        <option value="1">Child</option>
        <option value="2">Old Age</option>
        <option value="3">Street Dwellers</option>
        <option value="4">Animal</option>
         </select>
         </div>
            <a  class="btn btn-primary" onClick={ngohandler}>Donate</a>
        </div>
        </div>
        </div>
        <div class="col-sm-6">
            <div class="card" style={{width:400,height:100,float:"right",marginRight:"150px"}}>
            <img class="card-img-top" src={Ssiimg} alt="Card image cap"  style={{paddingBottom:"80px"}}/>
            <div class="card-body">
            <h5 class="card-title"><i>SSI(Small Scale Industries)</i></h5>
            <p class="card-text">Small scale industries are referred to as those industries in which the process of manufacturing, production and servicing are done on a small scale. The investment on such industries is one time and these investments are mostly done on plant and machinery, the total investment on such industries do not exceed 1 crore.</p>
    
            <a  class="btn btn-primary" onClick={ssihandler}>Donate</a>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default SelectionPage;