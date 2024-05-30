import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleCheck,
  faUtensils,
  faShieldHalved,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="services">
      <div className="service">
        <div className="service-layout">
          <div className="sectionSubHeader">SERVICES</div>
          <div className="sectionHeader">Strive Only For The Best.</div>
          <div className="layout">
            <ul>
              <li>
                <div className="icon" style={{ backgroundColor: "#dbeafe" }}>
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="ic"
                    style={{ color: "#60a5fa" }}
                  />
                </div>
                <p>High Class Security</p>
              </li>
              <li>
                <div className="icon" style={{ backgroundColor: "#fce7f3" }}>
                  <FontAwesomeIcon
                    icon={faPersonCircleCheck}
                    className="ic"
                    style={{ color: "#f472b6" }}
                  />
                </div>
                <p>24 Hours Room Service</p>
              </li>
              <li>
                <div className="icon" style={{ backgroundColor: "#f3e8ff" }}>
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="ic"
                    style={{ color: "#c084fc" }}
                  />
                </div>
                <p>Restaurant</p>
              </li>
              <li>
                <div className="icon" style={{ backgroundColor: "#ffe4e6" }}>
                  <FontAwesomeIcon
                    icon={faMap}
                    className="ic"
                    style={{ color: "#fb7185" }}
                  />
                </div>
                <p>Tourist Guide Support</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Services;
