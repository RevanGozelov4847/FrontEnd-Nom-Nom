import AnimatedPage from "../AnimatedPage";
import BecauseLove from "../components/BecauseLove";
import MoreUs from "../components/MoreUs";
import ProductSwiper from "../components/ProductSwiper";
import SwiperComponent from "../components/SwiperComponent"
const Home = () => {
  return (
      <AnimatedPage>
        <SwiperComponent/>
        <MoreUs/>
        <BecauseLove />
        <ProductSwiper />
      </AnimatedPage>
  );
};

export default Home;
