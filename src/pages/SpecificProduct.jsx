import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../cartContext";
import ProductSwiper from "../components/ProductsSwiper";
import ResponsiveAccordion from "../components/ResponsiveAccordion";
import Swal from "sweetalert2";
import { AiOutlineHeart, AiTwotoneHeart, AiOutlineWhatsApp } from "react-icons/ai";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";

const SpecificProduct = () => {
  const {
    addToCart,
    addToFavorite,
    removeFromFavorite,
    isInWishlist,
    setIsInWishlist,
  } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const handleToggleWishlist = (newProduct) => {
    setIsInWishlist(!isInWishlist);
  };

  function showSuccessAlert() {
    Swal.fire({
      title: "Success!",
      text: "The product has been added to the cart. You can complete your order by going to the basket.",
      icon: "success",
      confirmButtonText: "Continue",
      imageSize: "100x100",
      customClass: {
        confirmButton: "my-custom-class",
      },
      confirmButtonColor: "#ff8a01",
      iconColor: "#ff8a01",
    });
  }

  const handleAddToCart = (newProduct) => {
    addToCart(newProduct);
    showSuccessAlert();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:5000/api/Product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <AnimatedPage>
      <div className="specificProduct">
        <div className="imgAccordion">
          <div className="imgContainer">
            <img src={`https://localhost:5000/uploads/images/${product.image}`} alt={product.name} />
            <div className="heartIcon" onClick={handleToggleWishlist}>
              {isInWishlist ? (
                <AiTwotoneHeart
                  fill="#f5405b"
                  onClick={() => {
                    removeFromFavorite(product.id);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => {
                    addToFavorite(product);
                  }}
                />
              )}
            </div>
          </div>

        </div>

        <div className="infoProduct">
          <div className="headline">
            <p>{product?.name}</p>
            <div className="description">
              <p>{product?.description}</p>
            </div>
            <div className="process">
              <span>
                <i className="fa-regular fa-clock"></i>
              </span>
              <span>1 Hours in the process</span>
            </div>
            <div className="responsiveAccordion">
              <ResponsiveAccordion />
            </div>
          </div>
          <div className="price">
            <p>The final amount</p>
            <span>{product?.price}₼</span>
          </div>
          <p className="information">
            ⓘ You can tell us all the requests and notes during the order.
          </p>
          <div className="buttons">
            <button onClick={() => handleAddToCart(product)} className="search">
              Add to cart
            </button>
            <div className="buttonSecond">
              <button className="buyNow">Buy now</button>
              <div className="whatsapp">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://wa.me/994777474847/?text=Salam, Olee saytinin musteri xidmetlerine xos gelmisiniz"
                >
                  <AiOutlineWhatsApp fontSize="22px" color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUse">
        <div className="deliveryCard">
          <i className="fa-solid icon fa-xl fa-truck-fast"></i>
          <p className="title">Fast delivery</p>
          <p>Your orders are delivered to your address within the same day.</p>
        </div>
        <div className="preperationCard">
          <i className="fa-solid icon fa-xl fa-box"></i>
          <p className="title">Special preparation</p>
          <p>All orders to you</p>
          <p>It is prepared specially</p>
        </div>
        <div className="paymentCard">
          <i className="fa-regular icon fa-xl fa-credit-card"></i>
          <p className="title">Convenient payment</p>
          <p>Pay cash both online and at the door</p>
        </div>
        <div className="satisfactionCard">
          <i className="fa-regular icon fa-xl fa-face-smile"></i>
          <p className="title">Satisfaction</p>
          <p>We strive to please you</p>
        </div>
      </div>
      <div className="products">
        <ProductSwiper />
      </div>
    </AnimatedPage>
  );
};

export default SpecificProduct;
