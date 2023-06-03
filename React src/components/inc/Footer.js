import React from 'react';

function Footer(props) {
    return (
        <>
        <div>
<footer class="bg-dark text-center text-white">
  <div class="container p-4">
   <a href='/about'>About Us</a><br/>
   <a href='/contact'>Contact Us</a>
    <section class="mb-4">
      <p>
      Food waste management is the process through which food and other agricultural products are 
      recovered or redirected for human consumption, animal feed, 
      industrial uses, or environmental benefits.
      </p>
    </section>
  </div>
  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © FWMS:
    <a class="text-white" href="https://mdbootstrap.com/">FWMS.com</a>
  </div>
  
</footer>
            
        </div>
        </>
    );
}

export default Footer;