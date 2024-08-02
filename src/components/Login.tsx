import { displayRegisterPage, hideLoginPage, selectAuth } from "../redux/feature/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import PageHead from "./PageHead"
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import AuthSocialLogos from "./AuthSocialLogos";
import { useEffect, useRef } from "react";

const Login = ({ position, closeActiveNavButton }:{ closeActiveNavButton?: () => void,  position?: number} ) => {
  const { showLoginPage } = useAppSelector(selectAuth)
  const loginRef = useRef(null);
  const dispatch = useAppDispatch();
  const closeLogin = () => {
    dispatch(hideLoginPage());    
    closeActiveNavButton?.();

  }  
  const showRegister = () => {
    dispatch(hideLoginPage());    
    dispatch(displayRegisterPage())
  }
  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //   if (loginRef.current && !loginRef.current.contains(e.target)) {
  //     closeLogin();
  //   }
  //   }
  //   document.addEventListener('click', handleOutsideClick, true);
  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick, true);
  //   }
  // }, [dispatch])
  return (
    <div ref={loginRef}  className={`w-full fixed h-screen left-0 top-0 sm:top-[70px] bg-[rgba(0,0,0,0.3)] z-[1000] ${showLoginPage ? 'block': 'hidden'}`}>
       <div className={` fixed sm:hiddn bg-white top-0 sm:top-[70px] min-h-screen h-full sm:h-[80vh] sm:min-h-[90vh] w-full sm:w-[496px] left-0 ${showLoginPage ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all sm:transition-none duration-[0.75s] flex flex-col overflow-y-auto `} style={
      {
        left: `${position as number - 435}px`
      }
    }>
      <PageHead closeMenu={closeLogin} text='login' />
      <div className=" min-h-screen h-full flex flex-col items-center justify-center">
        <AuthSocialLogos />
        <form action="" className="w-[90%] mx-auto">
          <section className="space-y-4">
          <Input type="email" placeholder='E-mail' />
          <PasswordInput />
          </section>
          <section className=" mt-4 flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="remember" className=" w-[20px] h-[20px] rounded-md cursor-pointer" />
              <span className=" capitalize text-sm">remember me</span>
            </div>
            <a href="#" className=" capitalize text-sm">Forgot your password?</a>
          </section>
          <button type="button" className=" w-full text-center bg-shade-3 py-3 uppercase text-white rounded-md my-5">sign in</button>
        </form>
        <div className="flex justify-center flex-col items-center gap-2">
          <p className=" text-sm text-center text-neutral-gray-6">Signing up for a Manelo account means you agree to the Privacy policy, Terms of Services and Affiliate Terms.</p>
          <p className="text-sm">New to Manelo? <button type="button" className="text-shade-4 capitalize font-semibold" onClick={showRegister}>sign up</button></p>
      </div>
      </div>
      </div>
    </div>
   
  )
}

export default Login