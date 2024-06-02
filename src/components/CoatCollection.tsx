import { HiOutlineChevronRight } from "react-icons/hi2"
import { womenCoats } from "../utils/coats"
import CollectionsHeader from "./CollectionsHeader"

const CoatCollection = () => {
  return (
    <article className="sm:py-[7.75rem]">
      <div className=" sm:hidden">
       <CollectionsHeader text="coat collection" />
        <ul className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {
            womenCoats.map((col) => (
              <li className='relative'>
                <img src={col.img} alt={col.alt} className={`w-full sm:w-[300px] sm:h-[300px] h-auto object-cover rounded-md`} />
              </li>
            ))
          }
        </ul>
        <div className="flex flex-col gap-3">
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2">Discover perfectly tailored wool coats for every look to our bestselling leather trench coat - the ultimate piece for updating your evening cover up.</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md self-end">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-10">
        <ul className='flex gap-4'>
          {
            womenCoats.map((col) => (
              <li className='relative'>
                <img src={col.img} alt={col.alt} className={`w-full sm:w-[350px] sm:h-[350px] h-auto object-cover rounded-md`} />
              </li>
            ))
          }
        </ul>
        <div className="">
          <CollectionsHeader text="coat collection" />
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2 py-4">Discover perfectly tailored wool coats for every <br /> look to our bestselling leather trench coat - the <br /> ultimate piece for updating your evening cover up.</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CoatCollection
