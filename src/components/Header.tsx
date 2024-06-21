import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className=" bg-shade-5 py-2">
      <MobileNav />
      <DesktopNav />
      <MobileMenu />
    </header>
  )
}

export default Header
