// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({ numberOfslide, category }) {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const response = await axios.get(
      "https://662b9b40de35f91de158d81b.mockapi.io/Movie"
    );

    console.log(response.data);
    setMovies(response.data);
  };
  useEffect(() => {
    fetchMovie();
  });
  return (
    <>
      <Swiper
        slidesPerView={numberOfslide}
        spaceBetween={10}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
