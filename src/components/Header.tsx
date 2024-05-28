import { HiBars3, HiOutlineLockClosed, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header>
      <section className="sm:hidden bg-white flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-4">
          <button>
            <HiBars3 className="text-2xl" />
          </button>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Manelo logo" />
            <h2 className=" font-bold text-2xl">Manelo</h2>
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
      </section>
      <section className="hidden sm:flex">
      </section>
    </header>
  )
}

export default Header