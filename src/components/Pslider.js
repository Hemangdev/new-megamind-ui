import * as React from 'react';
import "./pslider.css";
import Limage1 from "../images/wiretr.png";
import Limage2 from "../images/accorm.png";
import Limage3 from "../images/electronaic.png";
import Limage4 from "../images/internations.png";
import Limage5 from "../images/save.png";
import Limage6 from "../images/save2.png";
import Limage7 from "../images/save3.png";
import Limage8 from "../images/save4.png";

const { useEffect, useState } = React;

// Data
const initialImages = [
  {
    img: Limage1,
    name: "Image 1",
    desc: "Description for Image 1"
  },
  {
    img: Limage2,
    name: "Image 2",
    desc: "Description for Image 2"
  },
  {
    img: Limage3,
    name: "Image 3",
    desc: "Description for Image 3"
  },
  {
    img: Limage4,
    name: "Image 4",
    desc: "Description for Image 4"
  },
  {
    img: Limage5,
    name: "Image 4",
    desc: "Description for Image 4"
  },
  {
    img: Limage6,
    name: "Image 4",
    desc: "Description for Image 4"
  },
  {
    img: Limage7,
    name: "Image 4",
    desc: "Description for Image 4"
  },
  {
    img: Limage8,
    name: "Image 4",
    desc: "Description for Image 4"
  },


];

// Carousel
function  Pslider() {


  
  const [images] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 3000); // Change the interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

    return (
        <div className="carousel-container">
          <div className="d-flex flex-column">
            <div className="carousel-items mote">
              {/* Render 5 items on the screen */}
              {Array(5)
                .fill()
                .map((_, index) => {
                  const imageItem =
                    images[
                      getCircularIndex(currentIndex + index - 2, images.length)
                    ];
                  return (
                    <div
                      key={index}
                      className={`${index === 2 ? "center" : "opacity"} ${
                        (index === 0 || index === 4) &&
                        "end d-none d-md-block d-lg-block"
                      }
                        ${
                          (index === 1 || index === 3) &&
                          "d-none d-md-block d-lg-block"
                        }`}
                      onClick={() =>
                        handleItemClick(
                          getCircularIndex(currentIndex + index - 2, images.length)
                        )
                      }
                    >
                      <img src={imageItem.img} alt="item" />
                    </div>
                  );
                })}
            </div>
           
          </div>
        </div>
      );
}

export default Pslider