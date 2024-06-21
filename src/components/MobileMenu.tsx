import { HiOutlineMail } from "react-icons/hi"
import MenuShoppingOptionsWithIcons from "./MenuShoppingOptionsWithIcons"
import MenuShoppingOption from "./MenuShoppingOption"
import { MdOutlineCardGiftcard } from "react-icons/md"
import { HiOutlineHeart, HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineXMark } from "react-icons/hi2"
import womenMenuPicture from '../assets/women/women_menu_picture.png';
import menMenuPicture from '../assets/men/men_menu_picture.png';
const newArrivalLinks = [
  'coats & jacket',
  'Trench coat',
  'tops and blouses',
  'dresses',
  'all'
]

const MobileMenu = () => {
  return (
    <section className="fixed sm:hidden bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-auto">
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
  )
}

export default MobileMenu