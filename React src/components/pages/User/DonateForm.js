import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

function DonateForm(props) {
    // let [ngo,setNgo]=useState('');
    let loc=useLocation();
// useEffect(()=>
// [
//    setNgo(loc)
// ],[])
    
    return (
        <div>
            <div>{loc.state.ngo_id}</div>
            <div>{loc.state.ngo_name}</div>
        </div>
    );
}

export default DonateForm;