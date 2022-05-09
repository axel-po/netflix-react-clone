import ErrorBg from "../../assets/images/bg-lost-in-space.png";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

export default function Error404() {

  return (
    <>
      <Nav />
      <section
        style={{
          backgroundImage: `url(${ErrorBg})`,
        }}
        className='w-full h-screen bg-cover bg-center flex justify-center items-center flex-col p-5 text-center'>
        <h3 className='text-white font-bold text-clamp-xl'>Vous cherchez votre chemin ? </h3>
        <p className='text-white  font-extralight text-clamp-sm mt-5 max-w-lg'>
          Désolés, nous n'avons pas trouvé cette page. Un vaste choix de programmes vous attend sur la page d'accueil.
        </p>
        <Link to='/' className='px-2 py-4 text-sm rounded-sm inline-flex items-center h-7 bg-gray-50 font-bold sm-2xl:p-5 my-5'>
          <span className='block'>Accueil Netflix</span>
        </Link>
      </section>
    </>
  );
}
