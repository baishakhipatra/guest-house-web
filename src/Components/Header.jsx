// import Navbar from "./Navbar";
// import SectionContainer from "./SectionContainer";

import "../assets/Header.css";
import Booking from "./Booking";
import { pageLinks } from "../../Data";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="body">
      <div className="navbar">
        <nav>
          <div className="logo">
            <p>Kingsukh Guest House</p>
          </div>
          <div className="navlinks">
            <ul>
              {pageLinks.map((point) => {
                const { id, href, text } = point;
                return (
                  <li key={id}>
                    <Link
                      to={href}
                      smooth={true}
                      duration={300}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="buttonSection">
            <Booking />
          </div>
        </nav>
      </div>
      <div className="sectionContainer">
        <p className="tagName">Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home In Our <span>Guest House.</span>
        </h1>
      </div>
    </div>
  );
};
export default Header;
