const HeaderNavLink = ({ text, activeLink, index, handleClick , isNavLinksClicked }: { text: string, activeLink: number, index: number, isNavLinksClicked: boolean, handleClick: (positionY: number) => void}) => {
  const handleShowMenu = (e) => {
    const positionY = e.target.getBoundingClientRect().left;    
    handleClick(positionY);
  }
  return (
    <li>
      <button className={` text-neutral-gray-12 font-[400] text-sm uppercase font-plus-jakarta ${isNavLinksClicked && activeLink === index && 'border-b-[3px] border-b-shade-4'}`} onClick={handleShowMenu}>{text}</button>
    </li>
  )
}

export default HeaderNavLink