import { HiBars3, HiOutlineLockClosed, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import logo from '../assets/logo.png';
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  return (
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
      {/* <MobileMenu /> */}
    </section>
  )
}

export default MobileNav