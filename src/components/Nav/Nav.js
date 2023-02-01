import { useState, useEffect, useContext } from "react";
import IconUser from "../../assets/images/icon-user.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils/clientApi";
import { AuthContext } from "../../context/authContext";

export default function Nav() {
  const [toggleMenu, setToogleMenu] = useState(false);
  const [toggleIconUser, setToggleIconUser] = useState(false);
  const [toggleBackground, setToggleBackground] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  //Handle Backgound Nav bar */
  const changeBackground = (e) => {
    if (window.scrollY > 20) {
      setToggleBackground(true);
    } else {
      setToggleBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  /* Handle Search Query */
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/${query}`.replace(/ /g, ""));
      setActiveSearch(false);
    }
  };

  /* Handle Logout */
  const getUsername = () => {
    return window.localStorage.getItem("username");
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    // queryClient().clear();
    navigate("/");
  };

  return (
    <nav className={` ${toggleBackground && "bg-black"} fixed top-0 w-full py-5 px-4 transition-all ease duration-300 sm-2xl:py-1 sm-2xl:px-10 z-10`}>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <Link to='/'>
            <img className='w-[16vw] max-w-[100px] mr-7 cursor-pointer' src='/images/netflix-logo.png' alt='logo Netflix' />
          </Link>
          <button onClick={() => setToogleMenu(!toggleMenu)} className='btn-menu text-xs text-neutral-50 flex items-center sm-2xl:hidden'>
            <span className='mr-1'>Parcourir</span>
            <span className='w-3'>
              <img src='/images/icon-arrow-down.svg' alt='' />
            </span>
          </button>
          <div
            className={`${
              toggleMenu ? "flex" : "hidden"
            } absolute top-[70px] p-5 flex-col items-center border-t-2 text-xs text-white font-light bg-lightNight sm-2xl:top-[71px] sm-2xl:static sm-2xl:flex sm-2xl:flex-row sm-2xl:gap-5 sm-2xl:w-full sm-2xl:bg-transparent sm-2xl:border-0 sm-2xl:text-base`}>
            <Link className='leading-[40px] sm-2xl:leading-none' to='/' onClick={() => setToogleMenu(!toggleMenu)}>
              Accueil
            </Link>
            <Link className='leading-[40px] sm-2xl:leading-none' to='/series' onClick={() => setToogleMenu(!toggleMenu)}>
              Séries
            </Link>
            <Link className='leading-[40px] sm-2xl:leading-none' to='/movies' onClick={() => setToogleMenu(!toggleMenu)}>
              Films
            </Link>
            <Link className='leading-[40px] sm-2xl:leading-none' to='/news' onClick={() => setToogleMenu(!toggleMenu)}>
              Nouveautés les plus regardées
            </Link>
            {/* <Link className='leading-[40px] sm-2xl:leading-none' to='/bookmarks' onClick={() => setToogleMenu(!toggleMenu)}>
              Ma liste
            </Link> */}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          {activeSearch ? (
            <div className='form-group '>
              <img className='w-6 absolute top-[50%] translate-y-[-50%] mx-2' src='/images/icon-loupe.svg' alt='icon de loupe' />
              <label htmlFor='search'></label>
              <input
                onBlur={() => setActiveSearch(!activeSearch)}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyDown={handleKeyPress}
                type='text'
                id='search'
                placeholder='Titre'
                className='border-2 border-white bg-transparent  py-1 px-9 text-white'
              />
            </div>
          ) : (
            <button onClick={handleActiveSearch}>
              <img className='hidden sm:block w-6 ' src='/images/icon-loupe.svg' alt='icon de loupe' />
            </button>
          )}
          <button
            style={{
              backgroundImage: `url(${IconUser})`,
            }}
            className='w-[30px] h-[30px] rounded-md  bg-cover bg-center'
            onClick={() => setToggleIconUser(!toggleIconUser)}></button>
          {/* <div
            className={`${
              toggleIconUser ? "flex" : "hidden"
            } absolute top-[70px] right-[10px] p-5 flex-col items-center border-t-2 text-xs text-white font-light bg-lightNight sm-2xl:top-[71px]  sm-2xl:text-base`}>
            <p className='mb-4'>Connecté sous le pseudo de : {getUsername()}</p>
            <button className='hover:font-bold' onClick={handleLogout}>
              Se déconnecter
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
