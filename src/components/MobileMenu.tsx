import { HiOutlineMail } from "react-icons/hi"
import MenuShoppingOptionsWithIcons from "./MenuShoppingOptionsWithIcons"
import MenuShoppingOption from "./MenuShoppingOption"
import { MdLocationOn, MdOutlineBorderColor, MdOutlineCardGiftcard, MdOutlineLogout } from "react-icons/md"
import { HiOutlineHeart, HiOutlineMagnifyingGlass, HiOutlinePlus, HiOutlineUser } from "react-icons/hi2"
import womenMenuPicture from '../assets/women/women_menu_picture.png';
import menMenuPicture from '../assets/men/men_menu_picture.png';
import MenuHead from "./MenuHead"
import { useAppDispatch } from "../redux/hooks"
import { displayLoginPage } from "../redux/authSlice"
import { RiDashboardLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import MenuOptionsForLoggedInAccount from "./MenuOptionsForLoggedInAccount"
import { TfiLocationPin } from "react-icons/tfi"
import { IoLocationOutline } from "react-icons/io5"
import MyAccount from "./MyAccount"
const newArrivalLinks = [
  'coats & jacket',
  'Trench coat',
  'tops and blouses',
  'dresses',
  'all'
]

const MobileMenu = ({ showMenu, closeMenu }: { showMenu: boolean, closeMenu: () => void }) => {
  const dispatch = useAppDispatch();
  const handleLoginPage = () => {
    dispatch(displayLoginPage());
    console.log('Auth');
    
  }
  return (
    <section className={`fixed lg:hidden bg-white top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-hidden overflow-y-auto ${showMenu ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s]`}>
      <MenuHead closeMenu={closeMenu} text="" />
      <div className="bg-white">
        <div className="flex gap-4 p-5 ">
          <div className="w-[50%]">
            <img src={womenMenuPicture} alt="" className=" object-cover w-full" />
          </div>
          <div className="w-[50%]">
            <img src={menMenuPicture} alt="" className=" object-cover w-full" />
          </div>
        </div>
        <ul className="py-5">
          <MenuShoppingOption header='new arrival' links={newArrivalLinks} />
          <MenuShoppingOption header='shop all' links={newArrivalLinks} />
          <MenuShoppingOption header='offers' links={newArrivalLinks} />
          <MenuShoppingOptionsWithIcons icon={<MdOutlineCardGiftcard className=" text-2xl" />} name='gift card' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineHeart className=" text-2xl" />} name='wishlist' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineMagnifyingGlass className=" text-2xl" />} name='search' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineUser className=" text-2xl" />} name='login / register' action={handleLoginPage} />
          <MyAccount closeMenu={closeMenu} />
        </ul>
        <div className="px-5">
          <p>Need help?</p>
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-2xl text-neutral-gray-10" />
            <span className=" text-sm font-plus-jakarta">sales@shopmanelo.com</span>
          </p>
        </div>
        <div className="w-[90%] mx-auto pt-[90px] pb-[8px]">
          <button className="bg-primary-black w-full rounded-md text-white py-2">Get 20&#37; off</button>
        </div>
      </div>
   </section>
  )
}

export default MobileMenu