import Room from "./Room";
import "../assets/Room.css";
import { Element } from "react-scroll";

const RoomContainer = () => {
  return (
    <Element name="roomContainer">
      <div className="roomSection">
        <p className="sectionSubHeader">OUR LIVING ROOM</p>
        <h2 className="sectionHeader">
          The Most Memorable Rest Time Starts Here.
        </h2>
        <div className="rooms">
          <Room
            img="https://www.kingsukhguesthouse.com/assets/small.jpg"
            name="Cozy Haven Room"
            desc="Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
            price="1000"
          />
          <Room
            img="https://www.kingsukhguesthouse.com/assets/large.jpg"
            name="Spacious Serenity Suite"
            desc="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
            price=" 1500"
          />
        </div>
      </div>
    </Element>
  );
};
export default RoomContainer;
