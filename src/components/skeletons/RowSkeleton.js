import Skeleton from "@mui/material/Skeleton";
import { useWidth } from "../../utils/hooks";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RowSkeleton({ nbElement = 20, title = "Films", nbSlide = 3 }) {
  const styles = {
    row: {
      backgroundColor: "#2C2C2C",
    },
  };
  const width = useWidth();

  const postersSkeletons = [];

  for (let i = 0; i < nbElement; i++) {
    postersSkeletons.push(i);
  }

  return (
    <section className='px-4 sm-2xl:px-10'>
      <h2 className='text-md font-bold mt-5 text-white sm:text-xl sm:mt-8 sm:mb-2'>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={nbSlide}
        slidesPerGroup={nbSlide}
        navigation={width >= 650 && true}
        spaceBetween={10}>
        {postersSkeletons.map((skeletons, id) => (
          <SwiperSlide key={id} style={styles.row}>
            {width <= 683 ? (
              <Skeleton variant='rectangular' height={120} animation='wave' />
            ) : (
              <Skeleton variant='rectangular' height={170} animation='wave' />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
