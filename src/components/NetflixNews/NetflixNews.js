import Row from "../Row/Row";
import Nav from "../Nav/Nav";
import { TYPE_TV } from "../../config";

export default function NetflixNews() {
  return (
    <>
      <Nav />
      <Row mt='90px' type={TYPE_TV} filter='trending' title='Séries tendances Netflix' />
      <Row type={TYPE_TV} filter='toprated' title='Séries les mieux notées' />
      <Row type={TYPE_TV} filter='populaire' title='Les séries populaires' />
      <Row type={TYPE_TV} filter='genre' param='99' title='Les documentaires' />
      <Row type={TYPE_TV} filter='genre' param='80' title='Les séries criminelles' />
    </>
  );
}
