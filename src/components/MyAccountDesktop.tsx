import { selectAuth, setShowAccount } from "../redux/feature/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import avatar from '../assets/men/men_menu_picture.png';
import { HiOutlineHeart, HiOutlineLockClosed, HiOutlineUser, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const MyAccountDesktop = ({ position, closeActiveNavButton }) => {
  const { loggedIn} = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const hideAccountMenu = () => {
    dispatch(setShowAccount(false));
    closeActiveNavButton();
  }
  return (
    <div className={`w-full fixed h-screen left-0 top-0 lg:top-[70px] bg-[rgba(0,0,0,0.3)] z-[1000] ${loggedIn ? 'block': 'hidden'}`}>
      <div className={` fixed lg:hiddn top-[70px] h w-full lg:w-[234px] left-0  overflow-y-auto rounded-md `} style={
      {
        left: `${position as number - 100}px`
      }
    }>
      <div className="flex justify-between items-center bg-tint-5 px-5 py-2">
        <img src={avatar} alt="Avatar" className="w-[45px] h-[45px] rounded-full border-2 border-tint-1" />
        <button onClick={hideAccountMenu}>
          <HiOutlineXMark className="text-xl" />
        </button>
      </div>
      <ul  className=" bg-white border-y-2 pb-5">
        <li>
          <Link to='dashboard' className="px-5 flex items-center gap-2 hover:bg-tint-5 py-1">
            <HiOutlineUser />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to='dashboard' className="px-5 flex items-center gap-2 hover:bg-tint-5 py-1">
            <HiOutlineLockClosed />
            <span>My order</span>
          </Link>
        </li>
        <li>
          <Link to='dashboard' className="px-5 flex items-center gap-2 hover:bg-tint-5 py-1">
            <HiOutlineHeart />
            <span>Wishlist</span>
          </Link>
        </li>
      </ul>
      <button className="bg-tint-5 w-full flex items-center gap-2 px-5 py-3">
        <CiLogout />
        <span className="capitalize">log out</span>
      </button>
    </div>
    </div>
  )
}

export default MyAccountDesktop