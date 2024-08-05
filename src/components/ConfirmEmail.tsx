import logo from '../assets/logo.png';
import { selectAuth } from '../redux/feature/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
const ConfirmEmail = ({ position }) => {
  const { showConfirmEmail } = useAppSelector(selectAuth)

  return (
    <div  className={`w-full fixed h-screen left-0 top-0 lg:top-[70px] bg-[rgba(0,0,0,0.3)] z-[1000] ${showConfirmEmail ? 'block': 'hidden'}`}>
      <div className={` fixed lg:hiddn bg-white top-0 lg:top-[70px] min-h-scree h-screen lg:h-[80vh lg:min-h-[90vh w-full lg:w-[496px] left-0 flex justify-center items-center gap-4 flex-col overflow-y-auto `} style={
      {
        left: `${position as number - 435}px`
      }
    }>
        <div>
          <img src={logo} alt="Manelo Logo" className=' object-cover ' />
        </div>
        <h3 className=' text-srate-success-1 font-bold'>Confirm your email address</h3>
        <p className=' text-sm'>Maah-1402@gmail.com</p>
        <p className=' text-center text-sm'>Please Check Your Email For  a Conformation Link. Didn&apos;t
        Receive The Email? We&apos;ll Send Your Another.</p>
        <button className=' bg-shade-4 capitalize py-2 px-4 rounded-md text-white'>Resend Confirmation Email</button>
        <button className=' text-sm'>Email correction</button>
      </div>
     
    </div>
  )
}

export default ConfirmEmail