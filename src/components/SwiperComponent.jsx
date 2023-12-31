import swiperImage1 from "../assets/images/meats.jpeg";
import swiperImage2 from "../assets/images/fruits.jpg";
import swiperImage3 from "../assets/images/Vegetables.jpg";
import swiperImage4 from "../assets/images/grains.webp";
import swiperImage5 from "../assets/images/herbs.jpeg";
import swiperImage6 from "../assets/images/diary_products.jpg";
import swiperImage7 from "../assets/images/drinks.jpeg";
import swiperImage8 from "../assets/images/oils.jpg";

import React, { useState, useEffect, useContext } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";

const SwiperComponent = () => {
 const { setCategoryFilter } = useContext(CartContext);
 const [categories, setCategories] = useState([]);

 useEffect(() => {
   const fetchCategories = async () => {
     try {
       const response = await fetch(
         "https://localhost:5000/api/Product/categories/get"
       );
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const data = await response.json();
       setCategories(data);
     } catch (error) {
       console.error("Error fetching categories:", error);
     }
   };

   fetchCategories();
 }, []);

 return (
   <div className="swiper-cards-wrapper">
     <Swiper
       breakpoints={{
         320: { slidesPerView: 1 },
         380: { slidesPerView: 2 },
         700: { slidesPerView: 2 },
         768: { slidesPerView: 3 },
         920: { slidesPerView: 3 },
         1100: { slidesPerView: 4 },
       }}
       loop={true}
       speed={600}
       autoplay={1000}
       modules={[Navigation, Pagination, Scrollbar]}
       spaceBetween={10}
       slidesPerView={4}
       navigation
       pagination={{ clickable: true }} 
     >
       {categories.map((category) => (
         <SwiperSlide key={category.id}>
           <Link
             to={`/products?category_id=${category.id}`}
             onClick={() => setCategoryFilter(category.id)}
           >
             <div className="swiper-slide-card">
               <span className="swiper-slide-span">{category.name}</span>
               <div className="swiper-slide-img-block">
                 {category.id === 1 && <img src={swiperImage1} alt={category.name} />}
                 {category.id === 10 && <img src={swiperImage2} alt={category.name} />}
                 {category.id ===11 && <img src={swiperImage3} alt={category.name} />}
                 {category.id === 12 && <img src={swiperImage4} alt={category.name} />}
                 {category.id === 13 && <img src={swiperImage5} alt={category.name} />}
                 {category.id === 14 && <img src={swiperImage6} alt={category.name} />}
                 {category.id === 15 && <img src={swiperImage7} alt={category.name} />}
                 {category.id === 16 && <img src={swiperImage8} alt={category.name} />}

               </div>
             </div>
           </Link>
         </SwiperSlide>
       ))}
     </Swiper>
   </div>
 );
};

export default SwiperComponent;

