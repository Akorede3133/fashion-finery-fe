import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FilterCategoriesOption = ({ header, links, count}) => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <li className={`   border-b-neutral-gray-1 `}>
      <div className={`flex justify-between items-center  py-3  cursor-pointer`} onClick={() => setOpenLinks((prev)=> !prev)}>
        <h4 className=" uppercase font-plus-jakarta text-sm font-semibold px-3">{header}({count})</h4>
        <button>
          { openLinks ? <BiChevronUp className="text-2xl text-neutral-gray-7" /> :   <BiChevronDown className="text-2xl text-neutral-gray-7" /> }
         
        </button>
      </div>
      <ul className={` rounded-md space-y-2  ${openLinks || 'hidden'}`}>
        {
          links.map((item, index) => (
            <li key={index} className=" capitalize text-sm font-plus-jakarta font-normal">
              <button className={`w-full ${index == 0 && ' bg-tint-5 text-tint-1'} text-left text-neutral-gray-5 py-3  font-semibold capitalize rounded-md`}>
                <span className=" px-7">
                {item} (10)
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </li>
  )
}

export default FilterCategoriesOption