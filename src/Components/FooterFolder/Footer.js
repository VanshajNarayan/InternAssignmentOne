import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer_section">
          <div className="firstBox">
            <img
              src="https://cdn-icons-png.flaticon.com/512/412/412869.png"
              alt="food delivery emoji"
            />
          </div>
          <div className="secondBox">
            <h4>Contact us</h4>
            <p> <span className="address"> Lorem Ipsum Pvt Ltd.5/1, Magalton </span>
              <span className="address"> Road, Phartosh Gate near YTM </span>
              <span className="address"> Market, XYZ-343434 </span>

              <span>example2020@gmail.com</span>

              <span>(904) 443-0343</span>
            </p>
          </div>
          <div className="thirdBox">
            <h4>More</h4>
            <ul type="none">
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
            </ul>
          </div>
          <div className="fourthBox">
            <h4>Social Links</h4>
            <div className="icons">
              <FaInstagram className="socialIcons"/>
              <FaTwitter className="socialIcons"/>
              <FaFacebookF className="socialIcons"/>
            </div>
            <p>&copy; 2022 Food Truck Example</p>
          </div>
        </section>
      </footer>
    </>
  )
};

export default Footer;