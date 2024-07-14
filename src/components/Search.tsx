import { HiArrowRight, HiOutlineArrowRight, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import MenuHead from "./MenuHead"
import womenSearch1 from '../assets/women/women_search_1.png';
import womenSearch2 from '../assets/women/women_search_2.png';
import SearchInspirationItem from "./SearchInspirationItem";
import { useState } from "react";
const inspiration = [
  {
    img: womenSearch1
  },
  {
    img: womenSearch2
  },
  
]

const Search = ({ closeSearch, showSearch }: { closeSearch: () => void, showSearch: boolean }) => {
  const [searching] = useState(true);
  return (
    <div className={` fixed sm:hiddn bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-aut ${showSearch ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s] flex flex-col `}>
      <div className="">
        <MenuHead text='search' closeMenu={closeSearch} />
        <div className="bg-white py-5">
          <section className=" w-[90%] mx-auto bg-white">
            <div className="border flex justify-between items-center p-4 rounded-md">
              <input type="text" placeholder="search" className="outline-none" />
              <HiOutlineMagnifyingGlass className="text-xl" />
            </div>
            <select name="" id="" className="w-full outline-none border p-4 rounded-md cursor-pointer my-3 capitalize text-sm">
                <option value="all cat" className="p-4 block">all categories</option>
                <option value="coats" className="p-4 block">coats</option>
              </select>
          </section>
        </div>
      </div>
      <div className=" bg-white overflow-auto h-full">
      { searching ||  <section className=" w-[90%] mx-auto bg-white">
            <h4 className=" capitalize text-base font-plus-jakarta font-semibold border-b border-neutral-400 py-1">need some inspiration?</h4>
            <ul className=" space-y-3 my-5">
              {
                inspiration.map((item) => (
                  <SearchInspirationItem img={item.img} />
                ))
              }
            </ul>
          </section> }
          { searching && <section className=" w-[90%] mx-auto bg-white">
            <h4 className=" capitalize text-base font-plus-jakarta font-semibold border-b border-neutral-400 py-1">search result:</h4>
            <p className=" text-sm">No product were found matching your selection.</p>
          </section> }
      </div>
      <div className=" border-y border-neutral-gray-5 py-1 bg-white">
        { !searching ? <button className="capitalize font-bold bg-neutral-gray-4 flex items-center gap-4 p-3 w-full">
          <span>View all(25)</span>
          <HiArrowRight className="text-xl" />
        </button>
        : <button className="bg-primary-black rounded-md text-white py-2 w-[90%] block mx-auto">Get 20&#37; off</button> }
      </div>
    </div>
  )
}

export default Search