import { HiOutlineXMark } from "react-icons/hi2"

const ProductShopping = () => {
  return (
    <div>
      <div className=" flex md:hidden justify-between pb-5 py-4">
        <div className=" flex items-center gap-2">
          <p className=" capitalize text-sm border-r border-neutral-gray-5 pr-2"><span className=" text-srate-error-1">281</span> products found</p>
          <div className=" flex items-center text-sm">
            <HiOutlineXMark  />
            <p className=" capitalize">in stock</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShopping