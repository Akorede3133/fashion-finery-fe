import { HiOutlineMail } from "react-icons/hi"
import MenuShoppingOptionsWithIcons from "./MenuShoppingOptionsWithIcons"
import MenuShoppingOption from "./MenuShoppingOption"
import { MdOutlineCardGiftcard } from "react-icons/md"
import { HiOutlineHeart, HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineXMark } from "react-icons/hi2"
import womenMenuPicture from '../assets/women/women_menu_picture.png';
import menMenuPicture from '../assets/men/men_menu_picture.png';
import { useState } from "react"
import MenuHead from "./MenuHead"
import { useAppDispatch } from "../redux/hooks"
import { displayAuthPage } from "../redux/feature/auth/authSlice"
const newArrivalLinks = [
  'coats & jacket',
  'Trench coat',
  'tops and blouses',
  'dresses',
  'all'
]

const MobileMenu = ({ showMenu, closeMenu }: { showMenu: boolean, closeMenu: () => void }) => {
  const dispatch = useAppDispatch();
  const handleShowAuthPage = () => {
    dispatch(displayAuthPage());
    console.log('Auth');
    
  }
  return (
    <section className={`fixed sm:hidden bg-white top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-hidden overflow-y-auto ${showMenu ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s]`}>
      <MenuHead closeMenu={closeMenu} text="" />
      <div className="bg-white">
        <div className="flex gap-4 p-5 ">
          <div>
            <img src={womenMenuPicture} alt="" className=" object-cover" />
          </div>
          <div>
            <img src={menMenuPicture} alt="" className=" object-cover" />
          </div>
        </div>
        <ul className="py-5">
          <MenuShoppingOption header='new arrival' links={newArrivalLinks} />
          <MenuShoppingOption header='shop all' links={newArrivalLinks} />
          <MenuShoppingOption header='offers' links={newArrivalLinks} />
          <MenuShoppingOptionsWithIcons icon={<MdOutlineCardGiftcard className=" text-2xl" />} name='gift card' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineHeart className=" text-2xl" />} name='wishlist' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineMagnifyingGlass className=" text-2xl" />} name='search' />
          <MenuShoppingOptionsWithIcons icon={<HiOutlineUser className=" text-2xl" />} name='login / register' action={handleShowAuthPage} />
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