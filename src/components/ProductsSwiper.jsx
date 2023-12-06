// import 'swiper/swiper-bundle.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

// import ProductCard from './ProductCard';
// import React, { useContext } from 'react';
// import { CartContext } from '../cartContext';

// SwiperCore.use([Navigation, Pagination, Scrollbar]);

// const ProductsSwiper = () => {
//   const { products } = useContext(CartContext);

//   return (
//     <div>
//       <div className="newOne">
//         <h1>Categories</h1>
//         <div className="food-swiper-wrapper-container">
//           <Swiper
//             breakpoints={{
//               300: { slidesPerView: 1 },
//               380: { slidesPerView: 2 },
//               500: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//             navigation
//             pagination={{ clickable: true }}
//             scrollbar={{ draggable: true }}
//             loop={true}
//             speed={600}
//             autoplay={{ delay: 1000 }}
//           >
//             {products?.map((item) => (
//               <SwiperSlide className="new" key={item.id}>
//                 <ProductCard item={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsSwiper;
