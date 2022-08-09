import React from "react";
import Carousel from "react-bootstrap/Carousel";
import tv from "../../image/tv.png";
import headphone from "../../image/headphone.png";
import xbox from "../../image/xbox.png";

const Banner = () => {
  return (
    <div className="bg-info text-white">
      <Carousel fade>
        <Carousel.Item>
          <img className=" w-50" src={headphone} alt="First slide" />
          <Carousel.Caption>
            <h3>Wireless Head Phone</h3>
            <p>Best Headphone ever buy it now!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-50" src={tv} alt="Second slide" />

          <Carousel.Caption className="text-dark">
            <h3>Latest Tv With Awsome features</h3>
            <p>We have the largest and latest tv buy it now.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-50" src={xbox} alt="Third slide" />

          <Carousel.Caption>
            <h3>Xbox with best features</h3>
            <p>Enjoy with our latest and updated xbox buy it now.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
