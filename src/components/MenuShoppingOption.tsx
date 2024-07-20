import { useState } from "react"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2"

const MenuShoppingOption = ( { header, links }) => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <li className={` ${ !openLinks && 'border-b-[1px]'}  border-b-neutral-gray-1 mx-5 `}>
      <div className={`flex justify-between items-center  py-3 ${openLinks ? 'bg-tint-5' : 'bg-whit'} cursor-pointer`} onClick={() => setOpenLinks((prev)=> !prev)}>
        <h4 className=" uppercase font-plus-jakarta text-sm font-semibold">{header}</h4>
        <button>
          { openLinks ? <HiOutlineMinus className="text-2xl text-primary-black" /> :   <HiOutlinePlus className="text-2xl text-primary-black" /> }
         
        </button>
      </div>
      { openLinks &&  <div className="h-[1px] bg-neutral-gray-5"></div>}
      <ul className={`bg-white px-10 space-y-5 py-3 ${openLinks || 'hidden'}`}>
        {
          links.map((item, index) => (
            <li key={index} className=" capitalize text-sm font-plus-jakarta font-normal">
              {item}
            </li>
          ))
        }
      </ul>
    </li>
  )
}

export default MenuShoppingOption