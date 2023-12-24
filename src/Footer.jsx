import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";

let Footer = () => {
  return (
    <div className="footerdiv">
      <div className="foot-maindiv">
        <div className="maindiv-1">
          <div className="foot-box1">
            <h5> ONLINE SHOPPING</h5>
            <ul className="liitems">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </div>

          <div className="foot-box2">
            <h5>CUSTOMER POLICIES</h5>
            <ul className="liitems">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>

          <div className="foot-box3">
            <h5>EXPERIENCE APP ON MOBILE</h5>
            <div className="img-foot">
              <img src="./public/appdownload.png" alt="" />
            </div>
            <div className="ketouch">
              <p className="ptext-foot">KEEP IN TOUCH</p>
              <div className="icons-footer">
                <p>
                  <IoLogoFacebook />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <GrYoutube />
                </p>
                <p>
                  <ImInstagram />
                </p>
              </div>
            </div>
          </div>

          <div className="foot-box4">
            <div className="first-div-footer">
              <img src="./public/og.png" height={"85%"} alt="" />
              <div className="footer-h4-box4-main">
                <h4 className="footer-h4-box4">
                  <span>100% ORIGINAL</span> guarantee for all products at
                  myntra.com
                </h4>
              </div>
            </div>
            <div className="first-div-footer">
              <img src="./public/return.png" height={"85%"} alt="" />
              <div className="footer-h4-box4-main">
                <h4 className="footer-h4-box4">
                  <span>Return within 14days</span> of receiving your order
                </h4>
              </div>
            </div>
          </div>

          <div className="foot-box1">
            <h5>USEFUL LINKS</h5>
            <ul className="liitems">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>Cleartrip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
