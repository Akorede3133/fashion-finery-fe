import { Link } from "react-router-dom"

const MenuOptionsForLoggedInAccount = ({ icon, text }) => {
  return (
    <li  className=" capitalize text-sm font-plus-jakarta font-normal ">
      <Link to='dashboard' className="flex gap-2 items-center">
        { icon }
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default MenuOptionsForLoggedInAccount