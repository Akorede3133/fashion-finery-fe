import { displayLoginPage, hideRegisterPage, selectAuth } from "../redux/feature/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import AuthSocialLogos from "./AuthSocialLogos"
import Input from "./Input"
import PageHead from "./PageHead"
import PasswordInput from "./PasswordInput"
import logo from '../assets/logo.png';

const Register = ({ position }) => {
  const { showRegisterPage } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch();
  const showLoginPage = () => {
    dispatch(displayLoginPage());
    dispatch(hideRegisterPage());
  }
  
  return (
    <div  className={`w-full fixed h-screen left-0 top-0 sm:top-[70px] bg-[rgba(0,0,0,0.3)] z-[1000] ${showRegisterPage ? 'block': 'hidden'}`}>
       <div className={` fixed sm:hiddn bg-white top-0 sm:top-[70px] min-h-screen h-full sm:h-[80vh] sm:min-h-[90vh] w-full sm:w-[496px] left-0 ${showRegisterPage ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all sm:transition-none duration-[0.75s] flex flex-col overflow-auto `} style={
      {
        left: `${position as number - 435}px`
      }
    }>
      <PageHead closeMenu={() => dispatch(hideRegisterPage())} text='Register' />
      <div className=" min-h-screen h-full flex flex-col items-center justify-center">
        <div className=" mb-[24px] ">
          <img src={logo} alt="" />
        </div>
        <AuthSocialLogos />
        <form action="" className="w-[90%] mx-auto">
          <section className="space-y-4">
          <Input type="text" placeholder='UserName' />
          <Input type="email" placeholder='E-mail' />
          <PasswordInput />
          </section>
          <button type="button" className=" w-full text-center bg-shade-3 py-3 uppercase text-white rounded-md my-5">register</button>
        </form>
        <div className="flex justify-center flex-col items-center gap-2">
          <p className="text-sm">Already have an account? <button type="button" className="text-shade-4 capitalize font-semibold" onClick={showLoginPage}>login here</button></p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Register