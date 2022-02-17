import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import citizenship2 from './images/citizenship2.jpg';
import citizenship from './images/citizenship.jpg';
import istanbul_one from './images/istanbul_one.jpg';
import citizenship4 from './images/citizenship4.jpg';
import citizenship1 from './images/citizenship1.jpg';
import Turkish from './video/Turkish_Flag1.mp4';


const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
  };

const BannerOne = () => {
    return (
        <div className='containerOne'>
        <div className="banner__container">
            <div className="slide__show">
                <Slider {...settings}>
                    <div className="slide__item">
                        <img src={citizenship2} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                        <img src={citizenship} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                        <img src={istanbul_one} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                      <img src={citizenship4} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                      <img src={citizenship1} alt="картинка"/>
                    </div>
                </Slider>
            </div>
          <div className="banner__content">
              <video autoPlay={true}  loop={true} playsInline={true} muted >
                <source src={Turkish} type="video/mp4" />
              </video>
            {/*<img src={FlashSale} alt="" className="banner__image"/>*/}
          </div>
        </div>
    </div>
    )
}

export default BannerOne;