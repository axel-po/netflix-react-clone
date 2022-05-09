import Error404 from "./components/Error404/Error404";
import NetflixApp from "./components/NetflixApp/NetflixApp";
import NetflixById from "./components/NetflixById/NetflixById";
import NetflixSeries from "./components/NetflixSeries/NetflixSeries";
import NetflixMovies from "./components/NetflixMovies/NetflixMovies";
import { Routes, Route } from "react-router-dom";
import NetflixNews from "./components/NetflixNews/NetflixNews";
import NetflixBookmarks from "./components/NetflixBookmarks/NetflixBookmarks";
import NetflixSearch from "./components/NetflixSearch/NetflixSearch";

export default function AuthApp() {
  return (
    <>
      <Routes>^
        <Route path='/' element={<NetflixApp />}></Route>
        <Route path='/tv/:tvId' element={<NetflixById />}></Route>
        <Route path='/movie/:movieId' element={<NetflixById />}></Route>
        <Route path='/series' element={<NetflixSeries />}></Route>
        <Route path='/movies' element={<NetflixMovies />}></Route>
        <Route path='/news' element={<NetflixNews />}></Route>
        <Route path='/bookmarks' element={<NetflixBookmarks />}></Route>
        <Route path='/search/:query' element={<NetflixSearch />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </>
  );
}
