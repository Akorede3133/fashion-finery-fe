import { useState } from 'react';
import logo from '../assets/logo.png';
import links from "../utils/navLinks";
import HeaderNavLink from './HeaderNavLink';
import { HiOutlineLockClosed, HiOutlineMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import DesktopMenu from './DesktopMenu';

const DesktopNav = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [isnavLinksClicked, setIsNavLinksClicked] = useState(false);
  const handleNavigation = (index) => {
    setActiveLink(index);
    setIsNavLinksClicked(true);
  }
  return (
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
      <DesktopMenu />

  </section>
  )
}

export default DesktopNav