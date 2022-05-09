import { Link } from "react-router-dom";

export default function Poster({ movieID, type, image, movieTitle }) {
  return (
    <Link to={`/${type}/${movieID}`}>
      <div className='w-52 md:w-[300px] aspect-video'>
        <img className='rounded-md' src={image} alt={movieTitle} />
      </div>
    </Link>
  );
}
