import React from "react";
//import playStore from "../../images/playstore.png";
//import appStore from "../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      




      <div class="leftFooter">
      <h3><u>Our Services</u></h3>
      <br></br>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">Women Clothing</li>
                <li class="nav-item mb-2">Men Clothing</li>
                <li class="nav-item mb-2">Kid's Clothing</li>

              </ul>
      </div>

      
      



      <div className="midFooter">
        <h1>Shopping App</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; B2G2</p>
      </div>


      <div className="midFooter">
      <div class="col-md-4">
              <div class="iframeMap">
                <iframe id="gmap_canvas" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=noida%20Road,%20haridwar%20SPSR%20noida+(PBR%20VITS)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                </iframe>

              </div>
        </div>
      </div>


      

      

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>




      
    </footer>
  );
};

export default Footer;
