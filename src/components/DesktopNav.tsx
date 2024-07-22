import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import links from "../utils/navLinks";
import HeaderNavLink from './HeaderNavLink';
import { HiOutlineLockClosed, HiOutlineMagnifyingGlass, HiOutlineUser } from 'react-icons/hi2';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import DesktopMenu from './DesktopMenu';
import Search from './Search';
import NavButton from './NavButton';
import Login from './Login';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { displayAuthPage, selectAuth } from '../redux/feature/auth/authSlice';

const DesktopNav = () => {
  const { showAuthPage } = useAppSelector(selectAuth)
  const [activeLink, setActiveLink] = useState(0)
  const [isnavLinksClicked, setIsNavLinksClicked] = useState(false);
  const [isNavButtonClicked, setIsNavButtonClicked] = useState(false);
  const [showSearch, setShowSearch]  = useState(false);
  const [activeNavButton, setActiveNavButton] = useState(0)
  
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState(0);
  const handleNavigation = (index: number, positionY: number) => {
    setActiveLink(index);
    setIsNavLinksClicked(true);
    setShowMenu(true);
    setPosition(positionY)
  }
  const closeSearch = () => setShowSearch(false);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLUListElement>(null);
  const handleShowSearch = (e, index) => {
    const positionX = e.target.getBoundingClientRect().left;
    setPosition(positionX)
    setShowSearch(true)
    setActiveNavButton(index);
    setIsNavButtonClicked(true);
  }
  const handleShowLogin = (e, index) => {
    const positionX = e.target.getBoundingClientRect().left;
    setPosition(positionX)
    dispatch(displayAuthPage());
    setActiveNavButton(index);
    setIsNavButtonClicked(true);
  }
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

  useEffect(() => {
    if (showMenu || showSearch || showAuthPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [showMenu, showSearch, showAuthPage])

  const NavButtons = [
    {
      name: 'search',
      icon: <HiOutlineMagnifyingGlass className=' text-xl' />,
      action: (e) => handleShowSearch(e, 0)
    },
    {
      name: 'profile',
      icon: <HiOutlineUser className="text-xl" />,
      action: (e) => handleShowLogin(e, 1)
    },
    {
      name: 'gift',
      icon: <MdOutlineCardGiftcard className="text-xl" />,
      action: (e) => handleShowSearch(e, 2)
    },
    {
      name: 'save',
      icon: <HiOutlineLockClosed className="text-xl" />,
      action: (e) => handleShowSearch(e, 3)
    }

  ]

  return (
    <section className="hidden sm:flex justify-between items-center relative bg-white py-2 px-12">
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
        {
          NavButtons.map((button, index) => (
            <NavButton key={index} icon={button.icon} index={index} action={button.action} activeNavButton={activeNavButton} isNavButtonClicked={isNavButtonClicked} />
          ))
        }
      </div>
      { showMenu && <DesktopMenu position={position} /> }
      <Search showSearch={showSearch} closeSearch={closeSearch} position={position} closeActiveNavButton={() => setIsNavButtonClicked(false)} />
      <Login position={position} closeActiveNavButton={() => setIsNavButtonClicked(false)} />
  </section>
  )
}

export default DesktopNav