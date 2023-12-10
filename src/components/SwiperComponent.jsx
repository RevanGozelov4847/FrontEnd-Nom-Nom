import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import swiperImage1 from "../assets/images/meat.jpeg";//meat
import swiperImage2 from "../assets/images/fruits.jpg";//fruits
import swiperImage3 from "../assets/images/Vegetables.jpeg";//vegetables
import swiperImage4 from "../assets/images/grains.jpg";//grains
import swiperImage5 from "../assets/images/herbs.jpg";//herbs
import swiperImage6 from "../assets/images/spices.jpg";//spices
import swiperImage7 from "../assets/images/diary_products.jpg";//diary products
import swiperImage8 from "../assets/images/oils.jpg";//oils
import swiperImage9 from "../assets/images/drinks.webp";//drinks
import swiperImage10 from "../assets/images/souces.jpg";//drinks


import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const SwiperComponent = () => {
  return (
    <div className="swiper-cards-wrapper">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        speed={600}
        autoplay={1000}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Meat</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage1} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Fruits</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage2} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Vegetables</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage3} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Grains</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage4} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Herbs</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage5} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Spices</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage6} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Diary Products</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage7} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Oils</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage8} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Drinks</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage9} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Souces</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage10} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>


        
      </Swiper>
    </div>
  );
};

export default SwiperComponent;