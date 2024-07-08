import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import links from "../utils/navLinks";
import HeaderNavLink from './HeaderNavLink';
import { HiOutlineLockClosed, HiOutlineMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import DesktopMenu from './DesktopMenu';

const DesktopNav = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [isnavLinksClicked, setIsNavLinksClicked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [coordY, setCoordY] = useState(0);
  const handleNavigation = (index: number, positionY: number) => {
    setActiveLink(index);
    setIsNavLinksClicked(true);
    setShowMenu(true);
    setCoordY(positionY)
  }
  const navRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setShowMenu(false);
      setIsNavLinksClicked(false)
    }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [])
  return (
    <section className="hidden sm:flex justify-between items-center bg-white py-4 px-12">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="Manelo logo" />
        <h2 className=" font-[400] text-3xl font-bree-serif">Manelo</h2>
      </div>
      <nav>
        <ul className="flex items-center gap-8" ref={navRef}>
          {
            links.map((link, index) => (
              <HeaderNavLink key={index} text={link.name} index={index} activeLink={activeLink} isNavLinksClicked={isnavLinksClicked} handleClick={(positionY) => handleNavigation(index, positionY)} />
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
      { showMenu && <DesktopMenu coordY={coordY} /> }

  </section>
  )
}

export default DesktopNav