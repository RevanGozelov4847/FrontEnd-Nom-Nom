import React, { useContext } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { CartContext } from "../cartContext";

const ProductsSwiper = () => {
  const { products } = useContext(CartContext);

  const customPrevButton = (
    <div className="swiper-button-prev custom-prev-button">

    </div>
  );

  const customNextButton = (
    <div className="swiper-button-next custom-next-button">
    </div>
  );

  return (
    <div>
      <div className="newOne">
        <h1>Flowers</h1>
        <div className="flowers-swiper-wrapper-container">
          <Swiper
            breakpoints={{
              300: { slidesPerView: 1 },
              380: { slidesPerView: 2 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination, Scrollbar]}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            loop={true}
            speed={600}
            autoplay={1000}
          >
            <div className="swiperAll">
              {products?.map((item) => (
                <SwiperSlide className="new" key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </div>
            {customPrevButton}
            {customNextButton}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductsSwiper;
