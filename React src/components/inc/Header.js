import React from 'react';

function Header() {
    return (
        <>
        <div >
        <nav  class ="navbar navbar-expand-lg navbar navbar-dark bg-dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"blue"}}>FMWS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register Here
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/userregister">User Register</a></li>
            <li><a class="dropdown-item" href="/ngoregister">NGO Register</a></li>
            <li><a class="dropdown-item" href="/ssiregister">SSI Register</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LogIn Here
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/userlogin">User LogIn</a></li>
            <li><a class="dropdown-item" href="/ngologin">NGO LogIn</a></li>
            <li><a class="dropdown-item" href="/ssilogin">SSI LogIn</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

        </>
    );
}

export default Header;