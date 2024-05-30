import Booking from "./Booking";
import "../assets/Room.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faFill,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const Room = (props) => {
  // const { name, desc, price } = props;

  return (
    <div className="room-card">
      <div className="roomImg">
        <img src={props.img} alt="room1-imge" />
        <div className="roomIcons">
          <span className="icons">
            <FontAwesomeIcon
              icon={faHeart}
              className="ic"
              style={{ color: "#f472b6" }}
            />
          </span>
          <span className="icons">
            <FontAwesomeIcon
              icon={faFill}
              className="ic"
              style={{ color: "#c084fc" }}
            />
          </span>
          <span className="icons">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="ic"
              style={{ color: "#60a5fa" }}
            />
          </span>
        </div>
      </div>
      <div className="roomDesc">
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <h5>
          Starting from <span>Rs. {props.price}/night</span>
        </h5>
        <Booking />
      </div>
    </div>
  );
};
export default Room;
