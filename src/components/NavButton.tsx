const NavButton = ({ icon, action, activeNavButton, isNavButtonClicked, index }) => {
  console.log(activeNavButton, index);
  
  return (
    <button onClick={action} className='relative'>
      { (activeNavButton == index)  && isNavButtonClicked && <div className='nav--active'></div> }
      { icon }
  </button>
  )
}

export default NavButton