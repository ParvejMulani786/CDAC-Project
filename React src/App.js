import logo from './logo.svg';
import './App.css';
import Header from './components/inc/Header';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/pages/Home/AboutUs';
import ContactUs from './components/pages/Home/ContactUs';
import Layout from './components/pages/Home/Layout';
import UserRegister from './components/pages/User/UserRegisterForm';
import UserLogin from './components/pages/User/UserLogin';
import UserLoginHome from './components/pages/User/UserLoginHome';
import NgoList from './components/pages/User/NgoList';
import SsiList from './components/pages/User/SsiList';
import DonateForm from './components/pages/User/DonateForm';
import RequestList from './components/pages/User/RequestList';
import AcceptedList from './components/pages/User/AcceptedList';
import FoodDetails from './components/pages/User/FoodDetails';
import FoodDetailsSsi from './components/pages/User/FoodDetailsSsi';

import NgoRegister from './components/pages/NGO/NgoRegister';
import NgoLogin from './components/pages/NGO/NgoLogin'
import NgoLoginHome from './components/pages/NGO/NgoLoginHome'
import NgoRequestList from './components/pages/NGO/NgoRequestList';
import NgoAcceptRejectList from './components/pages/NGO/NgoAcceptRejectList';

import SsiRegister from './components/pages/SSI/SsiRegister';
import SsiLogin from './components/pages/SSI/SsiLogin';
import SsiLoginHome from './components/pages/SSI/SsiLoginHome';
import SsiRequestList from './components/pages/SSI/SsiRequestList';
import SsiAcceptRejectList from './components/pages/SSI/SsiAcceptRejectList';


function App() {
  return (
    <>
  
   <Router>    
    <Routes>
    <Route  path="/" element={<Layout></Layout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path="/about" element={<AboutUs></AboutUs>}></Route>
    <Route path="/contact" element={<ContactUs></ContactUs>}></Route>

    <Route path="/userregister" element={<UserRegister></UserRegister>}></Route>
    <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
    <Route path="/userlogin/home" element={<UserLoginHome></UserLoginHome>}></Route>
    <Route path="/userlogin/ngolist" element={<NgoList></NgoList>}></Route>
    <Route path="/userlogin/donate" element={<DonateForm></DonateForm>}></Route>
    <Route path="/userlogin/requestlist" element={<RequestList></RequestList>}></Route>
    <Route path="/userlogin/acceptedlist" element={<AcceptedList></AcceptedList>}></Route>
    <Route path="/userlogin/fooddetailsngo" element={<FoodDetails></FoodDetails>}></Route>
    <Route path="/userlogin/fooddetailsssi" element={<FoodDetailsSsi></FoodDetailsSsi>}></Route>
    <Route path="/userlogin/ssilist" element={<SsiList></SsiList>}></Route>

    <Route path="/ngoregister" element={<NgoRegister></NgoRegister>}></Route>
    <Route path="/ngologin" element={<NgoLogin></NgoLogin>}></Route>
    <Route path="/ngologin/home" element={<NgoLoginHome></NgoLoginHome>}></Route>
    <Route path="/ngologin/requestlist" element={<NgoRequestList></NgoRequestList>}></Route>
    <Route path="/ngologin/acceptrejectlist" element={<NgoAcceptRejectList></NgoAcceptRejectList>}></Route>
    

    <Route path="/ssiregister" element={<SsiRegister></SsiRegister>}></Route>
    <Route path="/ssilogin" element={<SsiLogin></SsiLogin>}></Route>
    <Route path="/ssilogin/home" element={<SsiLoginHome></SsiLoginHome>}></Route>
    <Route path="/ssilogin/requestlist" element={<SsiRequestList></SsiRequestList>}></Route>
    <Route path="/ssilogin/acceptrejectlist" element={<SsiAcceptRejectList></SsiAcceptRejectList>}></Route>

    </Route>
    </Routes>
      </Router>
      
      

      </>
  );
}

export default App;
