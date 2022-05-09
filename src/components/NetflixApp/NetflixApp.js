import { useState, useContext } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import Nav from "../Nav/Nav";
import { getRandomType, getRandomId } from "../../utils/helper";
import { TYPE_MOVIE, TYPE_TV } from "../../config";
import { useMovie } from "../../utils/hooks.js";

export default function NetflixApp() {
  const [type] = useState(getRandomType());
  const [defaultMovieId] = useState(getRandomId(type));
  const headerMovie = useMovie(type, defaultMovieId);

  return (
    <>
      <Nav />
      <Header movie={headerMovie?.data} type={type} />
      <Row title='Films Netflix' filter='trending' type={TYPE_MOVIE} />
      <Row title='Série Netflix' filter='trending' type={TYPE_TV} />
      <Row title='Les mieux notés' filter='toprated' type={TYPE_MOVIE} />
      <Row title='Action & aventure' filter='genre' type={TYPE_TV} param='10759' />
      <Row title='Les meilleurs Thrillers' type={TYPE_MOVIE} filter='genre' param='53' />
      <Row title='Ma liste' type={TYPE_MOVIE} filter='genre' param='53' />
    </>
  );
}
