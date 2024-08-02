import appleLogo from '../assets/apple.png';
import facebookLogo from '../assets/facebook.png';
import googleLogo from '../assets/google.png';
const AuthSocialLogos = () => {
  return (
   <>
     <div className="flex justify-center">
        <ul className="flex items-center gap-2">
          <li>
            <button className="border border-neutral-300 p-1 rounded-md">
              <img src={appleLogo} alt="Apple logo" />
            </button>
          </li>
          <li>
            <button className="border border-neutral-300 p-1 rounded-md">
              <img src={googleLogo} alt="Google logo" />
            </button>
          </li>
          <li>
            <button className="border border-neutral-300 p-1 rounded-md">
              <img src={facebookLogo} alt="Facebook logo" />
            </button>
          </li>
        </ul>
      </div>
      <div className=" grid grid-cols-[1fr_0fr_1fr] items-center gap-2 pt-[32px] pb-[40px] w-[90%] mx-auto">
        <div className=" w-full h-[1px] bg-neutral-gray-10"></div>
        <p>or</p>
        <div className=" w-full h-[1px] bg-neutral-gray-10"></div>
      </div>
   </>
  )
}

export default AuthSocialLogos