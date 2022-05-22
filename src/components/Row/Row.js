import { TYPE_MOVIE } from "../../config";
import { useMovieFilter } from "../../utils/hooks";
import RowSkeleton from "../skeletons/RowSkeleton";
import { Link } from "react-router-dom";
import { buildImagePath } from "../../utils/helper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Row({ title = "Films", type = TYPE_MOVIE, filter = "populaire", param, mt }) {
  const data = useMovieFilter(type, filter, param);

  if (!data) {
    return <RowSkeleton title={title} />;
  }

  return (
    <section className='px-4 sm-2xl:px-10' style={{ marginTop: mt }}>
      <h2 className='text-md text-white sm:text-xl font-bold mt-8 mb-5'>{title}</h2>
      <Swiper modules={[Navigation, Pagination]} loop={true} slidesPerView={4} slidesPerGroup={4} navigation spaceBetween={10}>
        {data.map((movie) => (
          <SwiperSlide>
            <Link to={`/${type}/${movie?.id}`}>
              <img className='rounded-md hover:scale-y-105' src={buildImagePath(movie)} alt={movie?.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
