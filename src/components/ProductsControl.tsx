import { useEffect, useRef, useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { MdOutlineTune } from "react-icons/md"
import ProductFilter from "./ProductFilter"
import ProductSortControl from "./ProductSortControl"
import { HiOutlineXMark } from "react-icons/hi2"
import ProductSortOptions from "./ProductSortOptions"

const ProductsControl = () => {
  const sortRef = useRef<HTMLButtonElement>(null);
  const [showSortProduct, setShowSortProduct] = useState(false);
  const [showSortProductBg, setShowSortProductBg] = useState(false);
  const [showFilterProduct, setShowFilterProduct] = useState(false);
  const hideFilter = () => setShowFilterProduct(false);
  const hideSort = () => setShowSortProduct(false);
  useEffect(() => {
    if (showSortProduct || showFilterProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSortProduct, showFilterProduct])
  useEffect(() => {
    const outsideClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSortProductBg(false)
      }
    }
    document.addEventListener('click', outsideClick)
    return () => {
      document.removeEventListener('click', outsideClick)
    }
  }, [])
  return (
    <div className="py-4">
      <div className="flex md:hidden md:justify-start gap-4 justify-between">
        <button className=" flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md" onClick={() => setShowFilterProduct(true)}>
          <span>filter</span>
          <MdOutlineTune className=" text-2xl" />
        </button>
        <button className={`flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md ${showSortProduct && ' bg-tint-3'}`} onClick={() => setShowSortProduct(true)}>
          <span>sort</span>
          <BiChevronDown className="text-2xl" />
        </button>
      </div>
      <div className=" hidden md:flex justify-between border-b border-neutral-black-2 py-3 my-4">
        <div className=" flex items-center gap-2">
          <p className=" capitalize text-sm"><span className=" text-srate-error-1">281</span> products found</p>
          <div className=" flex items-center text-sm">
            <HiOutlineXMark  />
            <p className=" capitalize">in stock</p>
          </div>
          <div className=" flex items-center text-sm">
            <HiOutlineXMark />
            <p className=" capitalize">product</p>
          </div> 
        </div>
        <button ref={sortRef} className=" relative" onClick={() => setShowSortProductBg((prev) => !prev)}>
          <div className=" flex items-center gap-1">
            <span className=" uppercase font-bold font-serif">sort by</span>
            { showSortProductBg ? <BiChevronUp /> : <BiChevronDown /> }
            
          </div>
          <div className={`w-[300px] absolute bg-white z-[55] top-[37px] left-[-200px] rounded-md shadow-[3px_3px_5px_rgba(0,0,0,0.2),-3px_-3px_5px_rgba(0,0,0,0.2)] ${showSortProductBg ? 'block' : 'hidden'}`}>
            <ProductSortOptions />
          </div> 
        </button>
      </div>
      <div className=" md:grid grid-cols-[1fr,3fr] gap-4 h-screen">
        <div className=" hidden md:block">
          <h4 className=" uppercase font-serif text-2xl font-bold border-y-2 border-primary-black bg-tint-3 px-2 py-1">filter</h4>
        </div>
        <div className=" bg-blue-800 h-full">
          products
        </div>
      </div>
      <ProductSortControl showSortProduct={showSortProduct} hideSort={hideSort} />
      <ProductFilter showFilterProduct={showFilterProduct} hideFilter={hideFilter} />
    </div>
  )
}

export default ProductsControl