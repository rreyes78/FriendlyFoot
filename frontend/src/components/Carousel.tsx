import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ carousel, hero_carousel }) => {
  const trendingBrandFlag = carousel === 'Trending Brand';

  const trendingBrand = [
    { brandName: 'New Balance', Src: '../../src/assets/nb.png' },
    { brandName: 'Adidas', Src: '../../src/assets/adi.png' },
    { brandName: 'Nike', Src: '../../src/assets/Nike.png' },
  ];

  // Custom arrow components
  const NextArrow = (props) => (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black cursor-pointer z-10" onClick={props.onClick}>
      <FaChevronRight size={24} />
    </div>
  );

  const PrevArrow = (props) => (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black cursor-pointer z-10" onClick={props.onClick}>
      <FaChevronLeft size={24} />
    </div>
  );

  // Carousel settings for Trending Brand
  const BrandSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 3000,  // Set the interval (3000ms = 3 seconds)
    nextArrow: <NextArrow />,  // Use arrow components here
    prevArrow: <PrevArrow />,  // Use arrow components here
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Carousel settings for Hero Carousel
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 3000,  // Set the interval (3000ms = 3 seconds)
    nextArrow: <NextArrow />,  // Use arrow components here
    prevArrow: <PrevArrow /> // Use arrow components here
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <>
      {trendingBrandFlag && 
      <div className="w-full py-4">
          <Slider {...BrandSettings} className="w-full">
              {trendingBrand.map((trending, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 m-2 bg-white"
                  style={{ minWidth: '150px', minHeight: '150px' }}
                >
                  <img src={trending.Src} className="max-w-[60px] mx-auto" alt={trending.brandName} />
                  <p className="mt-2 text-[12px] md:text-[16px] text-center">{trending.brandName}</p>
                </div>
              ))}
            </Slider>
        </div>
      }
      {!trendingBrandFlag && 
      <div className="">
        <Slider {...Settings} className="pt-6">
          {hero_carousel.map((item, index) => (
            <div key={index}>
              <img src={item.Src} className="w-[130px] h-auto m-auto" alt={item.brandName} />
              <p className="mt-3 text-[20px] md:text-[26px] text-center">{item.brand}</p>
              <p className="font-roboto font-bold text-[16px] md:text-[22px] text-center">{item.price}</p>
            </div>
          ))}
        </Slider>
        <a href="#" className="text-red-primary mt-10 mb-4 flex font-roboto items-center underline justify-center text-[12px] md:text-[20px]">Visit Collections</a>
      </div>
      }
    </>
  );
};

export default Carousel;
