import { TYPE_MOVIE } from "../../config";
import { useMovieFilter } from "../../utils/hooks";
import RowSkeleton from "../skeletons/RowSkeleton";
import { Link } from "react-router-dom";
import { buildImagePath } from "../../utils/helper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWidth } from "../../utils/hooks";

import "swiper/css";
import "swiper/css/navigation";

export default function Row({ title = "Films", type = TYPE_MOVIE, filter = "populaire", param, mt }) {
  const data = useMovieFilter(type, filter, param);
  const width = useWidth();

  if (!data) {
    return <RowSkeleton title={title} nbSlide={width <= 500 ? 2 : width <= 900 ? 3 : width <= 1400 ? 4 : width >= 1400 ? 5 : 5} />;
  }

  return (
    <section className='px-4 sm-2xl:px-10' style={{ marginTop: mt }}>
      <h2 className='text-md font-bold mt-5 text-white sm:text-xl sm:mt-8 sm:mb-2'>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={width <= 500 ? 2 : width <= 900 ? 3 : width <= 1400 ? 4 : width >= 1400 ? 5 : 5}
        slidesPerGroup={width <= 500 ? 2 : width <= 900 ? 3 : width <= 1400 ? 4 : width >= 1400 ? 5 : 5}
        navigation={width >= 650 && true}
        spaceBetween={10}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className='z-50 md:hover:scale-[1.12] md:hover:first:mx-[30px] md:hover:last:mx-[-30px]'>
            <Link to={`/${type}/${movie?.id}`}>
              <img className='rounded-md' src={buildImagePath(movie)} alt={movie?.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
