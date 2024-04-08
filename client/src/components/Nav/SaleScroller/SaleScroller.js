import React from "react";
import Slider from "react-slick";
import './SaleScroller.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaleSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const offers = [
    {
      id: 1,
      title: "Amazing Sale on T-Shirts!",
      description: "Get 50% off on all T-Shirts.",
      image: "https://via.placeholder.com/300x200.png?text=T-Shirt",
      link: "/t-shirts",
    },
    {
      id: 2,
      title: "Limited Time Offer on Hoodies!",
      description: "Buy 1 Hoodie, get 1 free.",
      image: "https://via.placeholder.com/300x200.png?text=Hoodie",
      link: "/hoodies",
    },
    {
      id: 3,
      title: "Flat 30% Off on Pants!",
      description: "Shop now and save big on pants.",
      image: "https://via.placeholder.com/300x200.png?text=Pants",
      link: "/pants",
    },
  ];

  return (
    <div className="sale-section">
      <h2 className="title">Special Sale Offers</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="slide">
            <a href={offer.link}>
              <img src={offer.image} alt={offer.title} className="image" />
              <div className="content">
                <h3 className="title">{offer.title}</h3>
                <p className="description">{offer.description}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SaleSection;