const HeaderNavLink = ({ text, activeLink, index, handleClick , isNavLinksClicked}: { text: string, activeLink: number, index: number, isNavLinksClicked: boolean, handleClick: () => void}) => {
  return (
    <li>
      <button className={` text-neutral-gray-12 font-[400] text-sm uppercase font-plus-jakarta ${isNavLinksClicked && activeLink === index && 'border-b-[3px] border-b-shade-4'}`} onClick={handleClick}>{text}</button>
    </li>
  )
}

export default HeaderNavLink