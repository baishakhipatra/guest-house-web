import "../assets/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact-body">
        <div className="info_card">
          <h2>Contact info</h2>
          <div className="details">
            <div className="addr symb">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="icon-f"
                style={{ marginTop: "15px" }}
              />
              <p>
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </p>
            </div>
            <div className="mail symb">
              <FontAwesomeIcon icon={faEnvelope} className="icon-f" />
              <p>kkghosh0099@gmail.com</p>
            </div>
            <div className="phone symb">
              <FontAwesomeIcon icon={faPhone} className="icon-f" />
              <p>+91 9007062180</p>
            </div>
          </div>
          <div className="social_links">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </div>
        </div>
        <div class="contactForm1">
          <h2>Send a Message</h2>
          <div class="formBox1">
            <div class="inputBox1 w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div class="inputBox1 w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div class="inputBox1 w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div class="inputBox1 w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div class="inputBox1 w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div class="inputBox1 w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contact;
