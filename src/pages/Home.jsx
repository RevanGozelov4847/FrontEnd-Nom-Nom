import AnimatedPage from "../AnimatedPage";
import MoreUs from "../components/MoreUs";
import ProductSwiper from "../components/ProductsSwiper";
import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <div>
      <AnimatedPage>
        <SwiperComponent />
        <MoreUs />
        <ProductSwiper />
      </AnimatedPage>
    </div>
  );
};

export default Home;
