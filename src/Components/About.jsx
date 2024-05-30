import Booking from "./Booking";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="about">
        <div className="aboutImg">
          <img
            src="https://www.kingsukhguesthouse.com/assets/out.jpg"
            alt="out-image"
          />
        </div>
        <div className="aboutContent">
          <p className="sectionSubHeader">ABOUT US</p>
          <h2 className="sectionHeader">The Best Holidays Start Here!</h2>
          <p className="sectionDesc">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <h4 className="address">
            <a href="http://">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
          </h4>
          <h4 className="contact">
            <a href="">Contact us: +91 9007062180</a>
          </h4>
          <div className="book-button">
            <Booking />
          </div>
        </div>
      </div>
    </Element>
  );
};
export default About;
