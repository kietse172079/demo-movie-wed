// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({
  numberOfslide,
  category,
  isUseNavigation = false,
  title,
}) {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const response = await axios.get(
      // "https://662b9b40de35f91de158d81b.mockapi.io/Movie"
      "https://6627a8d9b625bf088c092f46.mockapi.io/Movies"
    );

    console.log(response.data);
    setMovies(response.data);
  };
  useEffect(() => {
    fetchMovie();
  });
  return (
    <div className={`carousel ${numberOfslide > 1 ? "multi-item" : ""}`}>
      {/* chỉ show title khi và chỉ khi có title nếu title == null =>ko show title */}
      {title && <h1>{title}</h1>}
      <Swiper
        navigation={isUseNavigation}
        slidesPerView={numberOfslide}
        spaceBetween={10}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
