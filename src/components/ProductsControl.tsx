import { useEffect, useRef, useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { MdOutlineTune } from "react-icons/md"
import ProductSortControl from "./ProductSortControl"
import { HiOutlineArrowRight, HiOutlineXMark } from "react-icons/hi2"
import ProductSortOptions from "./ProductSortOptions"
import ProductFilterOptions from "./ProductFilterOptions"
import ProductFilterControl from "./ProductFilterControl"
import ProductList from "./ProductList"

const ProductsControl = () => {
  const sortRef = useRef<HTMLDivElement>(null);
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
      <ProductSortControl showSortProduct={showSortProduct} hideSort={hideSort} />
      <ProductFilterControl showFilterProduct={showFilterProduct} hideFilter={hideFilter} />
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
        <div ref={sortRef} className=" relative cursor-pointer" onClick={() => setShowSortProductBg((prev) => !prev)}>
          <div className=" flex items-center gap-1">
            <span className=" uppercase font-bold font-serif">sort by</span>
            { showSortProductBg ? <BiChevronUp /> : <BiChevronDown /> }
            
          </div>
          <div className={`w-[300px] absolute bg-white z-[55] top-[37px] left-[-200px] rounded-md shadow-[3px_3px_5px_rgba(0,0,0,0.2),-3px_-3px_5px_rgba(0,0,0,0.2)] ${showSortProductBg ? 'block' : 'hidden'}`}>
            <ProductSortOptions />
          </div> 
        </div>
      </div>
      <div className=" flex md:hidden justify-between pb-5 py-4">
        <div className=" flex items-center gap-2">
          <p className=" capitalize text-sm border-r border-neutral-gray-5 pr-2"><span className=" text-srate-error-1">281</span> products found</p>
          <div className=" flex items-center text-sm">
            <HiOutlineXMark  />
            <p className=" capitalize">in stock</p>
          </div>
        </div>
      </div>
      <div className=" md:grid grid-cols-[1fr,3fr] gap-4 min-h-screen h-full">
        <div className=" hidden z-[1000] md:block bg-white">
          <h4 className=" uppercase font-serif text-2xl font-bold border-y-2 border-primary-black bg-tint-3 px-2 py-1">filter</h4>
          <ProductFilterOptions />
        </div>
        <ProductList />
      </div>
      <div className='border-t border-neutral-gray-9 my-10 flex justify-end md:justify-center py-2'>
        <button className=' md:hidden'>
          <HiOutlineArrowRight className=' text-2xl' />
        </button>
        <button className=' hidden md:flex items-center gap-4'>
          <span className=' text-sm capitalize'>1</span>
          <span className=' text-sm capitalize'>2</span>    
          <span className=' text-sm capitalize'>3</span>    
          <span className=' text-sm capitalize'>...</span> 
          <span className=' text-sm capitalize'>12</span>
          <span className=' text-sm capitalize'>next</span>  
        </button>
      </div>
    </div>
  )
}

export default ProductsControl