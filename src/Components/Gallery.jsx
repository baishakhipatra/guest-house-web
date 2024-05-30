import "../assets/Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Element } from "react-scroll";

const images = [
  "https://www.kingsukhguesthouse.com/assets/out.jpg",
  "https://www.kingsukhguesthouse.com/assets/ayodhya.webp",
  "https://www.kingsukhguesthouse.com/assets/large.jpg",
  "https://www.kingsukhguesthouse.com/assets/palash.webp",
  "https://www.kingsukhguesthouse.com/assets/flower.jpg",
  "https://www.kingsukhguesthouse.com/assets/small.jpg",
  "https://www.kingsukhguesthouse.com/assets/baranti.webp",
  "https://www.kingsukhguesthouse.com/assets/recep.jpg",
  "https://www.kingsukhguesthouse.com/assets/room1.jpg",
  "https://www.kingsukhguesthouse.com/assets/mithonDam.webp",
  "https://www.kingsukhguesthouse.com/assets/palash.webp",
  "https://www.kingsukhguesthouse.com/assets/small.jpg",
];

const Gallery = () => {
  return (
    <Element name="gallery">
      <p
        className="sectionSubHeader"
        style={{ width: "100%", margin: "20px auto", textAlign: "center" }}
      >
        GALLERY
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry columnsCount={4} gutter="0px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "flex", height: "40vh" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Element>
  );
};
export default Gallery;
