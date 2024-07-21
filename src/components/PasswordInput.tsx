import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    console.log('show');
    setShowPassword((pass) => !pass);
  }
  const handleHidePassword = () => {
    console.log('hide');
    setShowPassword(false);
  }

  return (
    <div className="flex justify-between border border-neutral-gray-6 rounded-md p-3">
      <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' className=" outline-none w-full" />
      <button type="button" onClick={handleShowPassword}>
           { showPassword ? <HiOutlineEyeSlash  /> : <HiOutlineEye /> }
        </button>
    </div>
  )
}

export default PasswordInput