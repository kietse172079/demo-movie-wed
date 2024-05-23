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
        title="Comedy Movie"
      />
      <Carousel numberOfslide={4} category={"Horror"} isUseNavigation title="Horror Movie" />
      <Carousel numberOfslide={4} category={"Action"} isUseNavigation title="Action Movie"/>
    </div>
  );
}

export default HomePage;
