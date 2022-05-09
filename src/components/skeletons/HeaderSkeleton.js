import Skeleton from "@mui/material/Skeleton";

export default function HeaderSkeleton() {
  const styles = {
    banner: {
      backgroundColor: "#1C2833",
    },
  };

  return (
    <header style={styles.banner} className='w-full h-[50vh]  bg-cover bg-center sm:h-[80vh] sm:min-h-[350px] '>
      <div className='py-4 px-4 sm-2xl:py-5 sm-2xl:px-14 w-full h-full bg-cover bg-center flex flex-col justify-center'>
        <h2 className='text-2xl text-white text-clamp-xl font-bold'>
          <Skeleton variant='text' animation='wave' width={210} />
        </h2>
        <p className='header-txt text-clamp-sm text-white text-ellipsis overflow-hidden mt-[3vw] max-w-xl line-clamp-{3}'>
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' />
        </p>
        <div className='flex mt-5 gap-2'>
          <button className='px-2 py-4 text-sm rounded-sm inline-flex items-center h-7 bg-gray-50 font-bold sm-2xl:p-5'>
            <span className='block'>
              <img className='w-4 mr-2' src='/images/icon-play.svg' alt='icon play' />
            </span>
            <span className='block'>Lecture</span>
          </button>
          <button className='px-2 py-4 text-sm rounded-sm inline-flex items-center h-7 bg-gray-500 font-bold text-white sm-2xl:p-5'>
            Ajouter à ma liste
          </button>
        </div>
      </div>
    </header>
  );
}
