import bgUrl from "./assets/images/posters.jpg";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

export default function UnauthApp() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
        className='fixed inset-0  bg-cover bg-center'>
        <img
          src='/images/netflix-logo.png'
          alt='logo netfflix'
          className='fixed top-[15px] left-[15px] w-[100px] z-10 sm-2xl:w-[150px] sm-2xl:top-[30px] sm-2xlleft-[30px] '
        />
      </main>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}
