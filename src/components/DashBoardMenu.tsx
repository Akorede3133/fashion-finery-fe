import { RiDashboardLine } from "react-icons/ri"
import DashBoardMenuButton from "./DashBoardMenuButton"
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlineHeart } from "react-icons/hi2"
import { MdOutlineBorderColor, MdOutlineLogout } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const DashBoardMenu = ({ path }) => {
  const navigate = useNavigate();
  console.log(path);
  
  const navigateToWishlist = () => {
    navigate('/wishlist');
  }
  const navigateToDashBoard = () => {
    navigate('/dashboard');
  }
  return (
    <div className=" pb-5">
      <ul className=" border-x-2 border-neutral-gray-4">
        <DashBoardMenuButton action={navigateToDashBoard} icon={<RiDashboardLine className={`text-2xl ${path === 'dashboard' ? 'text-tint-1' : 'text-gray-500'}`} />} text='dashboard'  pathId='dashboard' />
        <DashBoardMenuButton icon={<IoLocationOutline className="text-2xl" />}  text='address' pathId='address' />
        <DashBoardMenuButton icon={<HiOutlineHeart className={`text-2xl ${path === 'wishlist' ? 'text-tint-1' : 'text-gray-500'}`} />}  text='wishlist' action={navigateToWishlist} pathId='wishlist'/>
        <DashBoardMenuButton icon={<MdOutlineBorderColor  className="text-2xl" />}  text='order tracking'  pathId='order-tracking'/>
        <DashBoardMenuButton icon={<MdOutlineLogout  className="text-2xl" />}  text='log out' />
      </ul>
    </div>
  )
}

export default DashBoardMenu