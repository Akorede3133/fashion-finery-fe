import { HiOutlineMinus, HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2"
import FilterCategoriesOption from "./FilterCategoriesOption"
import { useState } from "react"

const newArrivalLinks = [
  'coats & jacket',
  'Trench coat',
  'tops and blouses',
  // 'dresses',
  // 'all'
]
const sizes = ['L (12)', 'M (15)', 'S (14)', 'XL (36)', 'XS (16)', 'Xxl (10)'];


const types = [
  {
    name: 'Bodysuits',
    count: 12
  },
  {
    name: 'cardigan',
    count: 15
  },
  {
    name: 'coats and jackets',
    count: 14
  },
  {
    name: 'crop top',
    count: 36
  },
  {
    name: 'shirts and tops',
    count: 16
  },
  {
    name: 'sweatshirts',
    count: 10
  },
  {
    name: 't-shirts',
    count: 9
  },
]
const colors = [
  {
    name: 'brown',
    color: '#b08119',
    count: 3
  },
  {
    name: 'bedige',
    color: '#f0deba',
    count: 2
  },
  {
    name: 'black',
    color: '#0c0c0c',
    count: 69
  },
  {
    name: 'blue',
    color: '#a8bed6',
    count: 2
  },
  {
    name: 'burgundy',
    color: '#b81f40',
    count: 5
  },
  {
    name: 'comel',
    color: '#c09a6a',
    count: 12
  },
  {
    name: 'gold',
    color: '#cea525',
    count: 1
  },
  {
    name: 'gray',
    color: '#6e6e6e',
    count: 48
  },
  {
    name: 'green',
    color: '#218012',
    count: 6
  },
]
const ProductFilter = ({showFilterProduct, hideFilter }: { showFilterProduct: boolean, hideFilter: () => void }) => {
  const [filters, setFilters] = useState({
    price: true,
    categories: false,
    size: false,
    color: false,
    type: false
  });
  const [selectedColor, setSelectedColor] = useState('brown');
  const togglefilter = (option) => {
    if (option === 'price') {
      if (filters.price) {
        setFilters((prev) => ({ ...prev,  price: false}))
      } else {
        setFilters((prev) => ({ ...prev,  price:  true}))
      }
    } else if (option === 'categories') {
      if (filters.categories) {
        setFilters((prev) => ({ ...prev,  categories: false}))
      } else {
        setFilters((prev) => ({ ...prev,  categories: true}))

      }
    } else if (option === 'size') {
      if (filters.size) {
        setFilters((prev) => ({ ...prev,  size: false}))
      } else {
        setFilters((prev) => ({ ...prev,  size: true}))

      }
    } else if (option === 'color') {
      if (filters.color) {
        setFilters((prev) => ({ ...prev,  color: false}))
      } else {
        setFilters((prev) => ({ ...prev,  color: true}))

      }
    } else if (option === 'type') {
      if (filters.type) {
        setFilters((prev) => ({ ...prev,  type: false}))
      } else {
        setFilters((prev) => ({ ...prev,  type: true}))

      }
    }

  }
  return (
    <div className={`bg-white absolute top-0 left-0 min-h-screen h-full w-full z-[1000] overflow-auto ${showFilterProduct ? 'block' : 'hidden'} `}>
    <div className=" bg-tint-5 flex justify-between text-xl p-4 uppercase font-bold font-serif ">
      <p>filter</p>
      <button onClick={hideFilter}>
        <HiOutlineXMark className="text-2xl" />
      </button>
    </div>
    <div className=" w-full h-[1px] bg-neutral-gray-9 my-1"></div>
    <ul className=" w-[90%] mx-auto">
      <li className="font-semibold">
        <button className="w-full flex justify-between border-b p-3" onClick={() => togglefilter('price')}>
          <p className={filters.price ? ' text-tint-1' : ''}>PRICE</p>
          { filters.price ? <HiOutlineMinus className=" text-xl text-neutral-gray-12" /> : <HiOutlinePlus className=" text-xl text-neutral-gray-12" /> }
        </button>
        { filters.price && <div className=" pt-[36px]">
          <input type="range" name="" id="" className="w-full cursor-pointer mb-[32px]" max={50} />
          <div className=" grid grid-cols-[1fr_0fr_1fr] items-center gap-2">
            <div className=" border flex items-center px-3 py-[5px] rounded-md text-neutral-gray-12 border-neutral-gray-12">
              <span className="w-[50%]">$</span>
              <input type="text" className="w-[50%] text-right" disabled value={3}  />
            </div>
            <p className=" capitalize font-bold">to</p>
            <div className=" border flex items-center px-3 py-[5px] rounded-md text-neutral-gray-12 border-neutral-gray-12">
              <span className="w-[50%]">$</span>
              <input type="text" className="w-[50%] text-right" disabled value={3}  />
            </div>
          </div>
        </div> } 
      </li>
      <li className="font-semibold">
        <button className="w-full flex justify-between border-b p-3" onClick={() => togglefilter('categories')}>
          <p className={filters.categories ? ' text-tint-1' : ''}>Categories</p>
          { filters.categories ? <HiOutlineMinus className=" text-xl text-neutral-gray-12" /> : <HiOutlinePlus className=" text-xl text-neutral-gray-12" /> }
        </button>
        { filters.categories && <ul>
          <FilterCategoriesOption header='new arrivals' count={253} links={newArrivalLinks} />
          <FilterCategoriesOption header='clothing' count={965} links={newArrivalLinks} />
          <FilterCategoriesOption header='collections' count={81} links={newArrivalLinks} />
          <FilterCategoriesOption header='offers' count={253} links={newArrivalLinks} />
        </ul>}
      </li>
      <li className="font-semibold">
        <button className="w-full flex justify-between border-b p-3" onClick={() => togglefilter('size')}>
          <p className={filters.size ? ' text-tint-1' : ''}>SIZE</p>
          { filters.size ? <HiOutlineMinus className=" text-xl text-neutral-gray-12" /> : <HiOutlinePlus className=" text-xl text-neutral-gray-12" /> }
        </button>
        <div>
          { filters.size && <ul className="px-5 space-y-5 py-5">
            {
              sizes.map((size) => {
                return (
                  <li className=" flex gap-2 items-center ">
                    <input type="checkbox"  className=" cursor-pointer w-[20px] h-[20px]" id={size} />
                    <label htmlFor={size} className=" text-neutral-gray-5 font-normal cursor-pointer text-sm">{size}</label>
                  </li>
                )
              })
            }
           
          </ul> }
        </div>
      </li>
      <li className="font-semibold">
        <button className="w-full flex justify-between border-b p-3" onClick={() => togglefilter('color')}>
          <p className={filters.color ? ' text-tint-1' : ''}>COLOR</p>
          { filters.color ? <HiOutlineMinus className=" text-xl text-neutral-gray-12" /> : <HiOutlinePlus className=" text-xl text-neutral-gray-12" /> }
        </button>
        { filters.color && <ul className="px-5 space-y-5 py-5">
          {
            colors.map((color) => {    
              return (
                <li className=" flex justify-start items-center gap-2 cursor-pointer" onClick={() => setSelectedColor(color.color)}>
                  <button className={` w-[18px] h-[18px] bg-white ${selectedColor === color.color && 'border-2 rounded-full p-[1px]'} `} style={{
                    borderColor: selectedColor === color.color ? color.color : undefined
                  }}>
                    <div className={` h-full w-full rounded-full`} style={
                      {
                        backgroundColor: color.color
                      }
                    }>
                    </div>
                  </button>
                  <button className={` ${selectedColor === color.color ? 'text-tint-1 font-bold' : ' text-neutral-gray-6'} font-normal capitalize text-sm`}>{color.name} ({color.count})</button>
                </li>
              )
            })
          }
        </ul> }
      </li>
      <li className="font-semibold">
        <button className="w-full flex justify-between border-b p-3" onClick={() => togglefilter('type')}>
          <p className={filters.type ? ' text-tint-1' : ''}>By Type</p>
          { filters.size ? <HiOutlineMinus className=" text-xl text-neutral-gray-12" /> : <HiOutlinePlus className=" text-xl text-neutral-gray-12" /> }
        </button>
        <div>
          { filters.type && <ul className="px-5 space-y-5 py-5">
            {
              types.map((type) => {                
                return (
                  <li  className=" flex gap-2 items-center " key={type.name}>
                    <input type="checkbox"  className=" cursor-pointer w-[20px] h-[20px]" id={type.name} />
                    <label htmlFor={type.name} className=" text-neutral-gray-5 font-normal cursor-pointer text-sm capitalize">{type.name} ({ type.count})</label>
                  </li>
                )
              })
            }
           
          </ul> }
        </div>
      </li>
    </ul>
    <button className=" border border-primary-black uppercase text-xl rounded-md py-2 w-[90%] block mx-auto mt-[55px] mb-[16px]" type="button">filter</button>
  </div>
  )
}

export default ProductFilter