import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Poster from "../Poster/Poster";
import { useFetchData } from "../../utils/hooks";
import { getBookmarksAPI, clientApiTMDB } from "../../utils/clientApi";
import { TYPE_MOVIE, TYPE_TV } from "../../config";
import { buildImagePath } from "../../utils/helper";

export default function NetflixBookmarks() {
  const { execute: executeTMDB, data: dataTMDB } = useFetchData();
  const [bookmarksState, setBookmarksState] = useState();

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    const data = await getBookmarksAPI();
    setBookmarksState(data.data.data);
  };

  useEffect(() => {
    // bookmarksState.map((bookmark) => {
    //   console.log(bookmark);
    // });
    console.log(bookmarksState);
  }, [executeTMDB]);
  return (
    <>
      <Nav />

      <section className='bg-red-400'>
        <h2>Ma liste</h2>
        {/* <Poster movieID={bookmarksState.id} type={bookmarksState.type} image={buildImagePath(dataTMDB?.data)} movieTitle={dataTMDB?.data.title} />
         */}
      </section>
    </>
  );
}
