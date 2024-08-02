import { Link } from "react-router-dom"

const MenuOptionsForLoggedInAccount = ({ icon, text, action }) => {
  return (
    <li  className=" capitalize text-sm font-plus-jakarta font-normal ">
      <button className="flex gap-2 items-center" onClick={action}>
        { icon }
        <span>{text}</span>
      </button>
    </li>
  )
}

export default MenuOptionsForLoggedInAccount