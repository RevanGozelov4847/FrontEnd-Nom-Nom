import AnimatedPage from "../AnimatedPage";
import BecauseLove from "../components/BecauseLove";
import MoreUs from "../components/MoreUs";
import ProductSwiper from "../components/ProductsSwiper";
import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <div>
      <AnimatedPage>
        <p>Home</p>
        <SwiperComponent />
        <MoreUs />
        <BecauseLove />
        <ProductSwiper />
      </AnimatedPage>
    </div>
  );
};

export default Home;
