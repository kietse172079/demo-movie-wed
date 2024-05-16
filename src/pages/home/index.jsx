import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfslide={1} category={"Trending"} />
      <Carousel numberOfslide={4} category={"Comedy"} />
      <Carousel numberOfslide={4} category={"Horror"} />
      <Carousel numberOfslide={4} category={"Action"} />
    </div>
  );
}

export default HomePage;
