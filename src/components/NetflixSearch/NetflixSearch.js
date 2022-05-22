import { useParams } from "react-router-dom";
import { useSearchMovie } from "../../utils/hooks";
import RowSkeleton from "../skeletons/RowSkeleton";

import Nav from "../Nav/Nav";
import { buildImagePath } from "../../utils/helper";
import { TYPE_TV } from "../../config";
import { TYPE_MOVIE } from "../../config";

export default function NetflixSearch() {
  const { query } = useParams();
  const { data } = useSearchMovie(query);

  //sort movie & tv
  const movies = data.filter((result) => result.media_type === TYPE_MOVIE);
  const series = data.filter((result) => result.media_type === TYPE_TV);

  return (
    <>
      <Nav />
      <NetflixRowView data={movies} title={`Films correspondants à : ${query}`} mt='90px' type={TYPE_MOVIE} />
      <NetflixRowView data={series} title={`Série correspondantes à : ${query}`} mt='90px' type={TYPE_TV} />
    </>
  );
}

export const NetflixRowView = ({ title = "Films", type = TYPE_MOVIE, filter = "populaire", param, mt, data }) => {
  if (!data) {
    return <RowSkeleton title={title} />;
  }

  return (
    // <section className='px-4 sm-2xl:px-10' style={{ marginTop: mt }}>
    //   <h2 className='text-md text-white sm:text-xl font-bold mt-8 mb-5'>{title}</h2>
    //   {data.length === 0 ? (
    //     <p className='text-white text-center mt-14'>Aucun résultat pour votre recherche.</p>
    //   ) : (
    //     <div className='flex gap-2 overflow-y-hidden overflow-x-auto mb-10'>
    //       {data.map((movie) => {
    //         return <Poster key={movie.id} type={type} movieID={movie.id} image={buildImagePath(movie)} movieTitle={movie.title} />;
    //       })}
    //     </div>
    //   )}
    // </section>
    <></>
  );
};
