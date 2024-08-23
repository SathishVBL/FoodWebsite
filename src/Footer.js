import React from "react";
import './Footer.css';
function Footer(){
    return(
        
<div className="body">
  <footer class="footer">
  <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <p className="dialogue">Someone might need what you don't.</p>
    <p>"Please donate to those in need if you have more than enough."</p>
    <ion-icon name="logo-youtube"></ion-icon>
    
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</div>
    );
}
export default Footer;