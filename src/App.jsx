import Header from "./Components/Header";
import BookingSection from "./Components/BookingSection";
import About from "./Components/About";
import RoomContainer from "./Components/RoomContainer";

import "./assets/Styles.css";
import Booking from "./Components/Booking";
import Services from "./Components/Services";
import Review from "./Components/Review";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <BookingSection />
      <About />
      <RoomContainer />
      <Services />
      <Review />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
