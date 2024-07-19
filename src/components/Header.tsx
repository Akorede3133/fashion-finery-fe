import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className=" bg-shade-5 py-1 pt-4 relativ">
      <MobileNav />
      <DesktopNav />
    </header>
  )
}

export default Header
