import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfslide={1} category={"Trending"} isUseNavigation />
      <Carousel
        numberOfslide={4}
        category={"Comedy"}
        isUseNavigation
        title="Horor Movie"
      />
      <Carousel numberOfslide={4} category={"Horror"} isUseNavigation />
      <Carousel numberOfslide={4} category={"Action"} isUseNavigation />
    </div>
  );
}

export default HomePage;
