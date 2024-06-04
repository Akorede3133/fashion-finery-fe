import { HiOutlineChevronRight } from "react-icons/hi2"
import CollectionsHeader from "./CollectionsHeader"
import womenCupc from '../assets/women/women_cupc_collection.png';
const CupcCollection = () => {
  return (
    <article className="sm:py-[7.75rem]">
      <div className=" sm:hidden">
       <CollectionsHeader text="cupc collection" />
       <img src={womenCupc} alt="Women cupc collection" className="w-full" />

        <div className="flex flex-col gap-3">
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2">Brownie marshmallow caramels marshmallow bear claw bonbon cake bear claw jelly-o.</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md self-end">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-10">
       <img src={womenCupc} alt="Women cupc collection" className="w-full" />
        <div className="">
          <CollectionsHeader text="cupc collection" />
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2 py-4">Brownie marshmallow caramels marshmallow bear claw bonbon cake bear claw jelly-o.</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CupcCollection