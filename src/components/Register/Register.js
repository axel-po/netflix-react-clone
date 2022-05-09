import { Link, useNavigate } from "react-router-dom";
import { URL_REGISTER } from "../../config";
import { authenticate } from "../../utils/clientApi";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

export default function Register() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  /* Yup */
  const schema = yup.object({
    username: yup.string().required("Ce champs est requis.").max(10, "10 caractères max"),
    email: yup.string().email("Veuillez entrer un email valide").required("Ce champs est requis."),
    password: yup.string().required("Ce champs est requis.").min(6, "Le mot de passe doit contenir 6 caracères minimun"),
  });

  /* Hook form */
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { isSubmitting, errors } = formState;

  /* Handle Submit Register*/
  const onSubmit = async (data) => {
    try {
      await authenticate(data, URL_REGISTER);
      setIsAuth(true);
      navigate("/");
      console.log(data);
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        alert("Erreur serveur");
      }
    }
  };

  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full py-24 px-5 bg-lightNight md:rounded-3xl md:max-w-md md:h-max md:px-[70px] md:py-[70px]'>
      <h2 className='text-white font-bold text-3xl text-center md:text-left'>Inscription</h2>
      <form className='realtive mt-[20px]' onSubmit={handleSubmit(onSubmit)}>
        <div className='my-[25px]'>
          <label htmlFor='username' className={`text-grayText text-sm ${errors.username && "text-red"}`}>
            Pseudo*
          </label>
          <input
            {...register("username")}
            type='text'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${errors.username && "border-[1px] border-red"}`}
          />
          {errors.username && <span className='text-red text-sm'>{errors.username.message}</span>}
        </div>
        <div className='my-[25px]'>
          <label htmlFor='email' className='text-grayText text-sm'>
            Votre E-mail*
          </label>
          <input
            {...register("email")}
            type='email'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${errors.email && "border-[1px] border-red"}`}
          />
          {errors.email && <span className='text-red text-sm'>{errors.email.message}</span>}
        </div>
        <div className='my-[25px]'>
          <label htmlFor='password' className='text-grayText text-sm'>
            Mot de passe*
          </label>
          <input
            {...register("password")}
            type='password'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${errors.password && "border-[1px] border-red"}`}
          />
          {errors.password && <span className='text-red text-sm'>{errors.password.message}</span>}
        </div>
        {/* <div className='my-[25px]'>
          <label htmlFor='confirmPassword' className='text-grayText text-sm'>
            Confirmation du mot de passe*
          </label>
          <input
            {...register("confirmPassword", {
              required: "Ce champs est requis.",
            })}
            type='password'
            className={`bg-[#333333] text-white text-lg rounded h-[40px] p-[15px] w-full md:h-[50px] ${
              errors.confirmPassword && "border-[1px] border-red"
            }`}
          />
          {errors.confirmPassword && <span className='text-red text-sm'>{errors.confirmPassword.message}</span>}
        </div> */}
        <button
          className='bg-red text-white w-full h-[40px]  rounded cursor-pointer md:h-[50px] disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isSubmitting}>
          S'inscrire
        </button>
      </form>
      <p className='text-grayText mt-[25px] text-sm'>
        Vous avez deja un compte ? &nbsp;
        <Link className='text-white font-bold' to='/'>
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}
