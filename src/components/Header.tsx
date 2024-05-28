import { HiBars3, HiOutlineLockClosed, HiOutlineMagnifyingGlass, HiOutlineUser } from "react-icons/hi2"
import logo from '../assets/logo.png';
import { MdOutlineCardGiftcard } from "react-icons/md";
import HeaderNavLink from "./HeaderNavLink";
import links from "../utils/navLinks";
import { useState } from "react";
const Header = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [isnavLinksClicked, setIsNavLinksClicked] = useState(false);
  const handleNavigation = (index) => {
    setActiveLink(index);
    setIsNavLinksClicked(true);
  }
  return (
    <header>
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
    </header>
  )
}

export default Header
