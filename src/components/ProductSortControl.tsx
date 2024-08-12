import { HiOutlineXMark } from "react-icons/hi2"

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
const ProductSortControl = ({ showSortProduct, hideSort }: { showSortProduct: boolean, hideSort: () => void }) => {
  const selectedOption = 'Price, high to low'

  return (
    <div className={`absolute h-full z-[1000] top-0 left-0 w-full bg-[rgba(0,0,0,0.35)] backdrop-blur-[3px] ${showSortProduct ? 'block' : 'hidden'}`}>
      <div className=" bg-white absolute bottom-0 w-full">
        <div className=" bg-tint-5 flex justify-between text-xl p-5 rounded-md uppercase font-bold font-serif">
          <p>sort</p>
          <button onClick={hideSort}>
            <HiOutlineXMark className="text-2xl" />
          </button>
        </div>
        <div className=" py-6">
          <ul className=" space-y-2">
          
            {
              sortOptions.map((option) => {
                return (
                  <li key={option} className={` ${option === selectedOption && 'border-l-4 border-tint-1 bg-tint-5 '}text-left`}>
                    <button className=" p-1 px-5 w-full text-left">{option}</button>
                </li>
                )
              })
            }
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default ProductSortControl