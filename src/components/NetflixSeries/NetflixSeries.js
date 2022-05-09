import { useState } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import Nav from "../Nav/Nav";
import { getRandomId } from "../../utils/helper";
import { TYPE_TV } from "../../config";
import { useMovie } from "../../utils/hooks";

export default function NetflixSeries() {
  const [type] = useState(TYPE_TV);
  const [defaultMovieId] = useState(getRandomId(type));
  const headerMovie = useMovie(type, defaultMovieId);

  return (
    <>
      <Nav />
      <Header movie={headerMovie?.data} type={type} />
      <Row type={TYPE_TV} filter='trending' title='Séries tendances Netflix' />
      <Row wideImage={false} type={TYPE_TV} filter='toprated' title='Séries les mieux notées' />
      <Row type={TYPE_TV} filter='populaire' title='Les séries populaires' />
      <Row type={TYPE_TV} filter='genre' param='99' title='Les documentaires' />
      <Row type={TYPE_TV} filter='genre' param='80' title='Les séries criminelles' watermark={false} wideImage={false} />
    </>
  );
}
