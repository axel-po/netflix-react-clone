import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Row from "../Row/Row";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { clientApiTMDB } from "../../utils/clientApi";
import { TYPE_MOVIE, TYPE_TV } from "../../config";
import { useMovie } from "../../utils/hooks";

export default function NetflixById() {
  const { tvId, movieId } = useParams();
  const location = useLocation();
  const [type, setType] = useState(location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE);
  const [id, setId] = useState(type === TYPE_TV ? tvId : movieId);
  // const { data: headerMovie } = useQuery(`${type}/${id}`, () => clientApiTMDB(`${type}/${id}`));
  const headerMovie = useMovie(type, id);

  useEffect(() => {
    const type = location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE;
    setType(type);
    setId(type === TYPE_TV ? tvId : movieId);
  }, [location.pathname, movieId, tvId]);

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
