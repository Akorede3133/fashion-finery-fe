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
import { displayLoginPage, hideLoginPage, hideRegisterPage, selectAuth, setShowAccount } from '../redux/feature/auth/authSlice';
import Register from './Register';
import ConfirmEmail from './ConfirmEmail';
import MyAccountDesktop from './MyAccountDesktop';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
  const { showLoginPage, showRegisterPage, loggedIn, showAccount } = useAppSelector(selectAuth)
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
    setShowSearch(false);
    dispatch(hideLoginPage());
    dispatch(hideRegisterPage())
    dispatch(setShowAccount(false))
    setIsNavButtonClicked(false);
    setPosition(positionY)
  }
  const closeSearch = () => setShowSearch(false);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLUListElement>(null);
  const hideNavMenus = (index) => {
    setActiveNavButton(index);
    setIsNavButtonClicked(true);
    setShowMenu(false)
    setIsNavLinksClicked(false);
  }
  const handleShowSearch = (e, index) => {
    const positionX = e.target.getBoundingClientRect().left;
    dispatch(hideLoginPage());
    dispatch(hideRegisterPage())
    setPosition(positionX)
    setShowSearch(true)
    hideNavMenus(index)
  }
  const handleShowLogin = (e, index) => {
    const positionX = e.target.getBoundingClientRect().left;
    setPosition(positionX)
    dispatch(displayLoginPage());
    hideNavMenus(index)
    setShowSearch(false)
  }
  const handleShowAccount = (e, index) => {
    const positionX = e.target.getBoundingClientRect().left;
    setPosition(positionX)
    loggedIn ? dispatch(setShowAccount(true)) : dispatch(displayLoginPage())
    hideNavMenus(index)
    setShowSearch(false)
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
    if (showMenu || showSearch || showLoginPage || showRegisterPage || showAccount) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [showMenu, showSearch, showLoginPage, showRegisterPage, showAccount])

  const NavButtons = [
    {
      name: 'search',
      icon: <HiOutlineMagnifyingGlass className=' text-xl' />,
      action: (e) => handleShowSearch(e, 0)
    },
    {
      name: 'profile',
      icon: <HiOutlineUser className="text-xl" />,
      action: (e) => handleShowAccount(e, 1)
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
    <section className="hidden lg:flex justify-between items-center relative bg-white py-2 px-12">
      <Link to='/' className="flex gap-2 items-center">
        <img src={logo} alt="Manelo logo" />
        <h2 className=" font-[400] text-3xl font-bree-serif">Manelo</h2>
      </Link>
      <nav>
        <ul className="flex items-center gap-8" ref={navRef}>
          {
            links.map((link, index) => (
              <HeaderNavLink key={index} text={link.name} index={index} activeLink={activeLink} isNavLinksClicked={isnavLinksClicked} handleClick={(positionY) => handleNavigation(index, positionY)} />
            ))
          }
          <li>
            <Link to='/products' className={` text-neutral-gray-12 font-[400] text-sm uppercase font-plus-jakarta `}>product</Link>
          </li>
          <li>
            <Link to='/journal' className={` text-neutral-gray-12 font-[400] text-sm uppercase font-plus-jakarta `}>journal</Link>
          </li>
          <li>
            <Link to='/about' className={` text-neutral-gray-12 font-[400] text-sm uppercase font-plus-jakarta `}>about</Link>
          </li>
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
      <Register position={position} closeActiveNavButton={() => setIsNavButtonClicked(false)} />
      { showRegisterPage  && <ConfirmEmail position={position} /> }
      { showAccount &&  <MyAccountDesktop position={position} closeActiveNavButton={() => setIsNavButtonClicked(false)} /> }
  </section>
  )
}

export default DesktopNav
