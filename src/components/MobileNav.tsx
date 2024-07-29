import { HiBars3, HiOutlineLockClosed, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import logo from '../assets/logo.png';
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Search from "./Search";
import Login from "./Login";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/feature/auth/authSlice";
import Register from "./Register";

const MobileNav = () => {
  const { showLoginPage, showRegisterPage } = useAppSelector(selectAuth)
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch]  = useState(false);
  console.log(showMenu);
  
  useEffect(() => {
    if (showMenu || showSearch || showLoginPage || showRegisterPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [showMenu, showSearch, showRegisterPage, showLoginPage])
  const closeMenu = () => setShowMenu(false);
  const closeSearch = () => setShowSearch(false);

  return (
    <section className="sm:hidden bg-white flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-4">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <HiBars3 className="text-2xl" />
        </button>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Manelo logo" />
          <h2 className=" font-[400] text-3xl font-bree-serif">Manelo</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setShowSearch(true)}>
          <HiOutlineMagnifyingGlass className="text-2xl" />
        </button>
        <button>
          <HiOutlineLockClosed className="text-2xl" />
        </button>
      </div>
      <MobileMenu showMenu={showMenu} closeMenu={closeMenu} />
      <Search showSearch={showSearch} closeSearch={closeSearch} />
      { showLoginPage && <Login /> }
      {showRegisterPage && <Register /> }
    </section>
  )
}

export default MobileNav