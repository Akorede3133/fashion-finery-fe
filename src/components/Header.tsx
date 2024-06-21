import { HiBars3, HiOutlineHeart, HiOutlineLockClosed, HiOutlineMagnifyingGlass, HiOutlinePlus, HiOutlineUser, HiOutlineXMark } from "react-icons/hi2"
import logo from '../assets/logo.png';
import womenMenuPicture from '../assets/women/women_menu_picture.png';
import menMenuPicture from '../assets/men/men_menu_picture.png';

import { MdMessage, MdOutlineCardGiftcard } from "react-icons/md";
import HeaderNavLink from "./HeaderNavLink";
import links from "../utils/navLinks";
import { useState } from "react";
import MenuShoppingOption from "./MenuShoppingOption";
import MenuShoppingOptionsWithIcons from "./MenuShoppingOptionsWithIcons";
import { BsInbox } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Header = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [isnavLinksClicked, setIsNavLinksClicked] = useState(false);
  const handleNavigation = (index) => {
    setActiveLink(index);
    setIsNavLinksClicked(true);
  }
  const newArrivalLinks = [
    'coats & jacket',
    'Trench coat',
    'tops and blouses',
    'dresses',
    'all'
  ]
  return (
    <header className=" bg-shade-5 py-2">
      <section className="sm:hidden bg-white flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-4">
          <button>
            <HiBars3 className="text-2xl" />
          </button>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Manelo logo" />
            <h2 className=" font-[400] text-3xl font-bree-serif">Manelo</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <HiOutlineMagnifyingGlass className="text-2xl" />
          </button>
          <button>
            <HiOutlineLockClosed className="text-2xl" />
          </button>
        </div>
      </section>
      <section className="hidden sm:flex justify-between items-center bg-white py-4 px-12">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Manelo logo" />
          <h2 className=" font-[400] text-3xl font-bree-serif">Manelo</h2>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            {
              links.map((link, index) => (
                <HeaderNavLink key={index} text={link.name} index={index} activeLink={activeLink} isNavLinksClicked={isnavLinksClicked} handleClick={() => handleNavigation(index)} />
              ))
            }
          </ul>
        </nav>
        <div className="flex gap-8 items-center">
          <button>
            <HiOutlineMagnifyingGlass className="text-xl" />
          </button>
          <button>
            <HiOutlineUser className="text-xl" />
          </button>
          <button>
            <MdOutlineCardGiftcard className="text-xl" />
          </button>
          <button>
            <HiOutlineLockClosed className="text-xl" />
          </button>
        </div>
      </section>
      <section className="fixed bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-auto">
        <div className=" flex justify-end bg-tint-5 mt-[10px] mb-[3px] p-3">
          <button>
            <HiOutlineXMark className=" text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-2 bg-white">
          <button className=" bg-white py-3 font-plus-jakarta rounded-[4px]">
            <span className="border-b-2 border-primary-black capitalize ">women</span>
          </button>
          <button className=" bg-tint-5 rounded-[4px]">
            <span className=" border-primary-black capitalize ">men</span>
          </button>
        </div>
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
            <MenuShoppingOptionsWithIcons icon={<HiOutlineUser className=" text-2xl" />} name='login / register' />
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
    </header>
  )
}

export default Header
