import { useEffect, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { MdOutlineTune } from "react-icons/md"
import ProductFilter from "./ProductFilter"
import ProductSortControl from "./ProductSortControl"

const ProductsControl = () => {
  const [showSortProduct, setShowSortProduct] = useState(false);
  const [showFilterProduct, setShowFilterProduct] = useState(true);
  const hideFilter = () => setShowFilterProduct(false);
  const hideSort = () => setShowSortProduct(false);
  useEffect(() => {
    if (showSortProduct || showFilterProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSortProduct, showFilterProduct])
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <button className=" flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md" onClick={() => setShowFilterProduct(true)}>
          <span>filter</span>
          <MdOutlineTune className=" text-2xl" />
        </button>
        <button className={`flex justify-between items-center w-[153px] text-xl uppercase font-serif font-semibold bg-tint-5 p-2 rounded-md ${showSortProduct && ' bg-tint-3'}`} onClick={() => setShowSortProduct(true)}>
          <span>sort</span>
          <BiChevronDown className="text-2xl" />
        </button>
      </div>
      <ProductSortControl showSortProduct={showSortProduct} hideSort={hideSort} />
      <ProductFilter showFilterProduct={showFilterProduct} hideFilter={hideFilter} />
    </div>
  )
}

export default ProductsControl