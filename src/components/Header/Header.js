import { TYPE_MOVIE, imagePathOriginal } from "../../config";
import HeaderSkeleton from "../skeletons/HeaderSkeleton";
import { createBookmarks } from "../../utils/clientApi";
import { useFetchData } from "../../utils/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header({ movie, type = TYPE_MOVIE }) {
  const title = type === TYPE_MOVIE ? movie?.title : movie?.name;
  const imageUrl = `${imagePathOriginal}${movie?.backdrop_path}`;
  const { execute } = useFetchData();

  const handleAddToBookmark = async () => {
    await createBookmarks({
      data: {
        idBookmark: movie?.id,
        type,
      },
    });
    console.log("add", type);
  };

  if (!movie) {
    return <HeaderSkeleton />;
  }

  return (
    <header style={{ backgroundImage: `url(${imageUrl})` }} className='w-full h-[50vh]  bg-cover bg-center sm:h-[80vh] sm:min-h-[350px] '>
      <div
        style={{ background: `linear-gradient(180deg, transparent, rgba(0,0,0,1.475228) 97%)` }}
        className='py-4 px-4 w-full h-full bg-cover bg-center flex flex-col justify-center sm-2xl:py-5 sm-2xl:px-10 '>
        <h2 className=' text-white text-clamp-xl font-bold'>{title}</h2>
        <p className='header-txt mt-2 text-clamp-sm text-white text-ellipsis overflow-hidden  max-w-xl '>{movie?.overview ?? "..."}</p>
        <div className='flex mt-5 gap-2'>
          <button className='px-2 py-4 text-sm rounded-sm inline-flex items-center h-7 bg-gray-50 font-bold sm-2xl:p-5'>
            <span className='block'>
              <img className='w-4 mr-2' src='/images/icon-play.svg' alt='icon play' />
            </span>
            <span className='block'>Lecture</span>
          </button>
          <button
            onClick={handleAddToBookmark}
            className='px-2 py-4 text-sm rounded-sm inline-flex items-center h-7 bg-gray-500 font-bold text-white sm-2xl:p-5'>
            Ajouter à ma liste
          </button>
        </div>
      </div>
    </header>
  );
}
