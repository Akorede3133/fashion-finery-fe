import { useEffect, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { HiOutlineXMark } from "react-icons/hi2"
import { MdOutlineTune } from "react-icons/md"

const ProductsControl = () => {
  const sortOptions = [
    'Featured',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ]
  const [sortProduct, setSortProduct] = useState(false);
  useEffect(() => {
    if (sortProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sortProduct])
  const selectedOption = 'Price, high to low'
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <button className=" flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md">
          <span>filter</span>
          <MdOutlineTune className=" text-2xl" />
        </button>
        <button className={`flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md ${sortProduct && ' bg-tint-3'}`} onClick={() => setSortProduct(true)}>
          <span>sort</span>
          <BiChevronDown className="text-2xl" />
        </button>
      </div>
      <div className={`absolute h-full z-[1000] top-0 left-0 w-full bg-[rgba(0,0,0,0.35)] backdrop-blur-[3px] ${sortProduct ? 'block' : 'hidden'}`}>
        <div className=" bg-white absolute bottom-0 w-full">
          <div className=" bg-tint-5 flex justify-between text-xl p-5 rounded-md uppercase font-bold font-serif">
            <p>sort</p>
            <button onClick={() => setSortProduct(false)}>
              <HiOutlineXMark className="text-2xl" />
            </button>
          </div>
          <div className=" py-6">
            <ul className=" space-y-2">
            
              {
                sortOptions.map((option) => {
                  return (
                    <li className={` ${option === selectedOption && 'border-l-4 border-tint-1 bg-tint-5 '}text-left`}>
                      <button className=" p-1 px-5 w-full text-left">{option}</button>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default ProductsControl