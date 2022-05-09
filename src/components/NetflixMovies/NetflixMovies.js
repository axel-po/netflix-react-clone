import { useState } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import Nav from "../Nav/Nav";
import { getRandomId } from "../../utils/helper";
import { useMovie } from "../../utils/hooks";
import { TYPE_MOVIE } from "../../config";

export default function NetflixMovies() {
  const [type] = useState(TYPE_MOVIE);
  const [defaultMovieId] = useState(getRandomId(type));
  const headerMovie = useMovie(type, defaultMovieId);

  return (
    <>
      <Nav />
      <Header movie={headerMovie?.data} type={type} />
      <Row type={TYPE_MOVIE} filter='trending' title='Films Netflix' />
      <Row wideImage={false} type={TYPE_MOVIE} filter='toprated' title='Les mieux notés' />
      <Row type={TYPE_MOVIE} filter='populaire' title='Les films pouplaires' />
      <Row type={TYPE_MOVIE} filter='genre' param='14' title='Films Fantastiques' />
      <Row type={TYPE_MOVIE} filter='genre' param='878' title='Les films de science fiction' watermark={false} wideImage={false} />
    </>
  );
}
