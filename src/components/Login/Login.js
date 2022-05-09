import { useContext } from "react";
import { Link } from "react-router-dom";
import { authenticate } from "../../utils/clientApi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onTouched",
  });
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data) => {
    try {
      await authenticate(data);
      setIsAuth(true);
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        alert("Erreur serveur");
      }
      setError("password", {
        type: "manual",
        message: "Mot de passe ou adresse email invalide.",
      });
      setError("identifier", {
        type: "manual",
      });
    }
  };

  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full py-24 px-5 bg-lightNight md:rounded-3xl md:max-w-md md:h-max md:px-[70px] md:py-[70px]'>
      <h2 className='text-white font-bold text-3xl text-center md:text-left'>S'identifier</h2>
      <form className='realtive mt-[20px]' onSubmit={handleSubmit(onSubmit)}>
        <div className='my-[25px]'>
          <label htmlFor='email' className={`text-grayText text-sm ${errors.identifier && "text-red"}`}>
            E-mail
          </label>
          <input
            defaultValue={"test@gmail.com"}
            {...register("identifier", {
              required: "Ce champs est requis.",
            })}
            type='email'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${
              errors.identifier && "border-[1px] border-red"
            }`}
          />
          {errors.identifier && <span className='text-red text-sm'>{errors.identifier.message}</span>}
        </div>
        <div className='my-[25px]'>
          <label htmlFor='password' className={`text-grayText text-sm ${errors.password && "text-red"}`}>
            Mot de passe
          </label>
          <input
            defaultValue={"123456"}
            {...register("password", {
              required: "Ce champs est requis.",
            })}
            type='password'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${errors.password && "border-[1px] border-red"}`}
          />
          {errors.password && <span className='text-red text-sm'>{errors.password.message}</span>}
        </div>
        <button
          className='bg-red text-white w-full h-[40px]  rounded cursor-pointer md:h-[50px] disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isSubmitting}>
          S'identifier
        </button>
      </form>
      <p className='text-grayText mt-[25px] text-sm'>
        Première visite sur Netflix ? &nbsp;
        <Link className='text-white font-bold' to='/register'>
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
