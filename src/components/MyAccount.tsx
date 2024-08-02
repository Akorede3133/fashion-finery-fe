import { useState } from "react"
import { HiOutlineHeart, HiOutlineMinus, HiOutlinePlus, HiOutlineUser } from "react-icons/hi2"
import MenuOptionsForLoggedInAccount from "./MenuOptionsForLoggedInAccount"
import { MdOutlineBorderColor, MdOutlineLogout } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { RiDashboardLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const MyAccount = ({ closeMenu }) => {
  const [openLinks, setOpenLinks] = useState(false);
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/dashboard');
    closeMenu();

  }

  return (
    <li className={`border-b-[1px] border-b-neutral-gray-1 relative ${openLinks && 'bg-tint-5' }`}>
      <button className={`py-3 px-5  flex gap-[4px] items-center justify-between w-full ${openLinks && ' border-l-4 border-blue-500 text-tint-1'}`} onClick={() => setOpenLinks((prev) => !prev)}>
        <div className="flex items-center gap-1">
          <HiOutlineUser className="text-2xl text-gray-900"/>
          <span className=" font-plus-jakarta capitalize">my account</span>
        </div>
        { openLinks ? <HiOutlineMinus className="text-2xl text-primary-black" /> : <HiOutlinePlus className="text-2xl text-primary-black" /> }
         
      </button>
      {
        openLinks && <ul className={`bg-white px-10 space-y-5 py-3`}>
        <MenuOptionsForLoggedInAccount icon={<RiDashboardLine className="text-2xl" />}  text='dashboard' action={navigateToDashboard} />
        <MenuOptionsForLoggedInAccount icon={<IoLocationOutline className="text-2xl" />}  text='address' />
        <MenuOptionsForLoggedInAccount icon={<HiOutlineHeart className="text-2xl" />}  text='wishlist' />
        <MenuOptionsForLoggedInAccount icon={<MdOutlineBorderColor  className="text-2xl" />}  text='order tracking' />
        <MenuOptionsForLoggedInAccount icon={<MdOutlineLogout  className="text-2xl" />}  text='order tracking' />
      </ul>
      }
        
    </li>
  )
}

export default MyAccount