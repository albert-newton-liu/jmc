
import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // 引入左右箭头图标

const slides = [
  {
    image: '/images/hero1.jpeg', // Path to your image in public/images/
    verse: 'After this I saw a vast crowd, too great to count, from every nation and tribe and people and language, standing in front of the throne and before the Lamb... Revelation 7:9',
  },
  {
    image: '/images/hero2.jpeg',
    verse: 'There is no longer Jew or Gentile, slave or free, male and female. For you are all one in Christ Jesus. Galatians 3:28',
  },
  {
    image: '/images/hero3.jpeg',
    verse: 'I will bring them to my holy mountain of Jerusalem and will fill them with joy in my house of prayer... My Temple will be called a house of prayer for all nations. Isaiah 56:7',
  },
    {
    image: '/images/hero4.jpeg',
    verse: 'When they heard the loud noise, everyone came running, and they were bewildered to hear their own languages being spoken by the believers. Acts 2:6',
  },
];

// Custom previous arrow component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{ ...style, display: "block" }} // Ensure display block for visibility
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

// Custom next arrow component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{ ...style, display: "block" }} // Ensure display block for visibility
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />, // Use custom next arrow
    prevArrow: <SamplePrevArrow />  // Use custom previous arrow
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="hero-image" />
            <div className="hero-overlay">
              <h2 className="hero-verse-text">{slide.verse}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}