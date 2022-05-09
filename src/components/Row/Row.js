import { TYPE_MOVIE } from "../../config";
import { useMovieFilter } from "../../utils/hooks";
import RowSkeleton from "../skeletons/RowSkeleton";
import Poster from "../Poster/Poster";
import { buildImagePath } from "../../utils/helper";

export default function Row({ title = "Films", type = TYPE_MOVIE, filter = "populaire", param, mt }) {
  const data = useMovieFilter(type, filter, param);

  if (!data) {
    return <RowSkeleton title={title} />;
  }

  return (
    <section className='px-4 sm-2xl:px-10' style={{ marginTop: mt }}>
      <h2 className='text-md text-white sm:text-xl font-bold mt-8 mb-5'>{title}</h2>
      <div className='row-slide flex gap-2 overflow-y-hidden overflow-x-auto mb-10'>
        {data.map((movie) => {
          return <Poster key={movie.id} type={type} movieID={movie.id} image={buildImagePath(movie)} movieTitle={movie.title} />;
        })}
      </div>
    </section>
  );
}
