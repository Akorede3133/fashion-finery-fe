import { HiOutlineXMark } from "react-icons/hi2"
import ProductFilterOptions from "./ProductFilterOptions";


const ProductFilter = ({showFilterProduct, hideFilter }: { showFilterProduct: boolean, hideFilter: () => void }) => { 
  return (
    <div className={`bg-white absolute top-0 left-0 min-h-screen h-full w-full z-[1000] overflow-auto ${showFilterProduct ? 'block' : 'hidden'} `}>
    <div className=" bg-tint-5 flex justify-between text-xl p-4 uppercase font-bold font-serif ">
      <p>filter</p>
      <button onClick={hideFilter}>
        <HiOutlineXMark className="text-2xl" />
      </button>
    </div>
    <div className=" w-full h-[1px] bg-neutral-gray-9 my-1"></div>
    <ProductFilterOptions />
    <button className=" border border-primary-black uppercase text-xl rounded-md py-2 w-[90%] block mx-auto mt-[55px] mb-[16px]" type="button">filter</button>
  </div>
  )
}

export default ProductFilter