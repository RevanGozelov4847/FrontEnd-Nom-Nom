
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import React from "react";
import { useSelector } from 'react-redux';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const ProductsSwiper = () => {
  const products = useSelector(state => state.products.items);

  return (
    <div>
      <div className="newOne">
        <h1>Flowers</h1>
        <div className="flowers-swiper-wrapper-container">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
              },

              380: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            loop={true}
            speed={600}
            autoplay={1000}
          >
            <div className="swiperAll">
              {products?.map((item) => {
                return (
                  <SwiperSlide className="new" key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductsSwiper;
