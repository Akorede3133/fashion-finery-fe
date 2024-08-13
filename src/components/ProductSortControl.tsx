import { HiOutlineXMark } from "react-icons/hi2"
import ProductSortOptions from "./ProductSortOptions"

const ProductSortControl = ({ showSortProduct, hideSort }: { showSortProduct: boolean, hideSort: () => void }) => {

  return (
    <div className={`fixed md:hidden min-h-screen h-full z-[1000] top-0 left-0 w-full bg-[rgba(0,0,0,0.35)] backdrop-blur-[3px] ${showSortProduct ? 'block' : 'hidden'}`}>
      <div className=" bg-white z-[1000] absolute bottom-0 w-full">
        <div className=" bg-tint-5 flex justify-between text-xl p-5 rounded-md uppercase font-bold font-serif">
          <p>sort</p>
          <button onClick={hideSort}>
            <HiOutlineXMark className="text-2xl" />
          </button>
        </div>
        <div className=" py-6">
          <ProductSortOptions />
        </div>  
      </div>
    </div>
  )
}

export default ProductSortControl